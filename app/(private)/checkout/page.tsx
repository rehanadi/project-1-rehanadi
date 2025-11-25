'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CheckoutContainer from './partials/checkout-container';
import CheckoutSection from './partials/checkout-section';
import LoanSuccess from '@/features/loans/components/loan-success';
import { useAppSelector } from '@/lib/hooks';

const CheckoutPage = () => {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [returnDate, setReturnDate] = useState('');
  const { items, selectedItems } = useAppSelector((state) => state.cart);

  // Redirect to cart if no items selected
  useEffect(() => {
    if (!isSuccess && selectedItems.length === 0) {
      router.push('/cart');
    }
  }, [selectedItems.length, isSuccess, router]);

  if (isSuccess) {
    return (
      <CheckoutContainer>
        <div className='flex min-h-[calc(100vh-320px)] items-center justify-center'>
          <LoanSuccess dueDate={returnDate} />
        </div>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutSection
        onSuccess={(date) => {
          setReturnDate(date);
          setIsSuccess(true);
        }}
      />
    </CheckoutContainer>
  );
};

export default CheckoutPage;
