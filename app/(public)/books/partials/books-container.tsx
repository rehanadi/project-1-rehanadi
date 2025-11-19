import React from 'react';

const BooksContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container w-full py-4 md:pt-12 md:pb-[96.75px]'>
      {children}
    </div>
  );
};

export default BooksContainer;
