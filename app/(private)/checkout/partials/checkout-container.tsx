import React from 'react';

const CheckoutContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container w-full max-w-250 pt-4 pb-12 md:pt-12 md:pb-20'>
      {children}
    </div>
  );
};

export default CheckoutContainer;
