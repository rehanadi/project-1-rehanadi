'use client';

import { useState } from 'react';
import CheckoutContainer from './partials/checkout-container';
import CheckoutSection from './partials/checkout-section';
import LoanSuccess from '@/features/loans/components/loan-success';

const CheckoutPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [returnDate, setReturnDate] = useState('');

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
