import React from 'react';

const LoansContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container flex w-full max-w-250 flex-col gap-3.75 pt-4 pb-12 md:gap-6 md:pt-12 md:pb-25'>
      {children}
    </div>
  );
};

export default LoansContainer;
