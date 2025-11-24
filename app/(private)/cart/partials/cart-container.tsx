import React from 'react';

const CartContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container w-full max-w-250 pt-4 pb-20 md:pt-12 md:pb-25'>
      {children}
    </div>
  );
};

export default CartContainer;
