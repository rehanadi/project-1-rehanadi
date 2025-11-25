'use client';

import { useState, useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import DurationRadio from './duration-radio';
import AcceptmentCheckbox from './acceptment-checkbox';
import dayjs from 'dayjs';
import { useAddLoan } from '@/features/loans/hooks';
import { useRemoveCartItem } from '@/features/cart/hooks';
import { useAppSelector } from '@/lib/hooks';
import { toast } from 'react-toastify';

interface CheckoutFormProps {
  onSuccess: (returnDate: string) => void;
}

const CheckoutForm = ({ onSuccess }: CheckoutFormProps) => {
  const [duration, setDuration] = useState('3');
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const { items, selectedItems } = useAppSelector((state) => state.cart);
  const { mutateAsync: addLoan, isPending: isAddingLoan } = useAddLoan();
  const { mutateAsync: removeCartItem } = useRemoveCartItem();

  const borrowDate = dayjs().format('DD MMM YYYY');

  const returnDate = useMemo(() => {
    return dayjs().add(Number(duration), 'day').format('DD MMMM YYYY');
  }, [duration]);

  const selectedBooks = items.filter((item) => selectedItems.includes(item.id));

  const canSubmit = acceptTnc && acceptPolicy && selectedBooks.length > 0;

  const handleSubmit = async () => {
    if (!canSubmit) {
      toast.error('Please accept all terms and conditions');
      return;
    }

    try {
      // Add loans for all selected books
      const loanPromises = selectedBooks.map((item) =>
        addLoan({
          bookId: item.bookId,
          days: Number(duration),
        })
      );

      await Promise.all(loanPromises);

      // Remove cart items after successful loans
      const removePromises = selectedBooks.map((item) =>
        removeCartItem(item.id)
      );

      await Promise.all(removePromises);

      const finalReturnDate = dayjs()
        .add(Number(duration), 'day')
        .toISOString();
      onSuccess(finalReturnDate);
      toast.success('Books borrowed successfully!');
    } catch (error) {
      toast.error('Failed to borrow books. Please try again.');
    }
  };

  return (
    <div className='shadow-light flex flex-col gap-4 rounded-3xl p-4 md:gap-6 md:p-5'>
      <h2 className='md:text-display-sm text-xl font-bold'>
        Complete Your Borrow Request
      </h2>

      <div className='flex flex-col gap-0.5'>
        <h4 className='text-sm-bold'>Borrow Date</h4>
        <div className='flex-between gap-2 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2'>
          <span className='text-md-semibold flex-1'>{borrowDate}</span>
          <Calendar className='size-5' />
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <h4 className='md:text-md text-sm font-bold'>Borrow Duration</h4>

        <RadioGroup
          value={duration}
          onValueChange={setDuration}
          className='gap-3'
        >
          <DurationRadio label='3 Days' value='3' />
          <DurationRadio label='5 Days' value='5' />
          <DurationRadio label='10 Days' value='10' />
        </RadioGroup>
      </div>

      <div className='bg-primary-100 rounded-xl p-3 md:p-4'>
        <h4 className='md:text-md text-sm font-bold'>Return Date</h4>
        <p className='md:text-md text-sm font-medium'>
          Please return the book no later than{' '}
          <span className='text-md-bold text-danger-500 break-keep'>
            {returnDate}
          </span>
        </p>
      </div>

      <div className='flex flex-col gap-2'>
        <AcceptmentCheckbox
          label='I agree to return the book(s) before the due date.'
          value='tnc'
          checked={acceptTnc}
          onCheckedChange={setAcceptTnc}
        />
        <AcceptmentCheckbox
          label='I accept the library borrowing policy.'
          value='policy'
          checked={acceptPolicy}
          onCheckedChange={setAcceptPolicy}
        />
      </div>

      <Button
        className='w-full'
        disabled={!canSubmit || isAddingLoan}
        onClick={handleSubmit}
      >
        {isAddingLoan ? 'Processing...' : 'Confirm & Borrow'}
      </Button>
    </div>
  );
};

export default CheckoutForm;
