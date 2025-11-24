import { Calendar } from 'lucide-react';
import { RadioGroup } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import DurationRadio from './duration-radio';
import AcceptmentCheckbox from './acceptment-checkbox';

const CheckoutForm = () => {
  return (
    <div className='shadow-light flex flex-col gap-4 rounded-3xl p-4 md:gap-6 md:p-5'>
      <h2 className='md:text-display-sm text-xl font-bold'>
        Complete Your Borrow Request
      </h2>

      <div className='flex flex-col gap-0.5'>
        <h4 className='text-sm-bold'>Borrow Date</h4>
        <div className='flex-between gap-2 rounded-xl border border-neutral-300 bg-neutral-100 px-4 py-2'>
          <span className='text-md-semibold flex-1'>28 Aug 2024</span>
          <Calendar className='size-5 cursor-pointer' />
        </div>
      </div>

      <div className='flex flex-col gap-3'>
        <h4 className='md:text-md text-sm font-bold'>Borrow Duration</h4>

        <RadioGroup defaultValue='3-days' className='gap-3'>
          <DurationRadio label='3 Days' value='3-days' />
          <DurationRadio label='5 Days' value='5-days' />
          <DurationRadio label='10 Days' value='10-days' />
        </RadioGroup>
      </div>

      <div className='bg-primary-100 rounded-xl p-3 md:p-4'>
        <h4 className='md:text-md text-sm font-bold'>Return Date</h4>
        <p className='md:text-md text-sm font-medium'>
          Please return the book no later than{' '}
          <span className='text-md-bold text-danger-500 break-keep'>
            31 August 2025
          </span>
        </p>
      </div>

      <div className='flex flex-col gap-2'>
        <AcceptmentCheckbox
          label='I agree to return the book(s) before the due date.'
          value='tnc'
        />
        <AcceptmentCheckbox
          label='I accept the library borrowing policy.'
          value='policy'
        />
      </div>

      <Button className='w-full'>Confirm & Borrow</Button>
    </div>
  );
};

export default CheckoutForm;
