import React from 'react';

const BookContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container flex w-full flex-col gap-6 py-4 md:gap-16 md:pt-12 md:pb-29.5'>
      {children}
    </div>
  );
};

export default BookContainer;
