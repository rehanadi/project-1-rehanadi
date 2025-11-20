import React from 'react';

const BooksContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='flex flex-col gap-3.75 md:gap-6'>{children}</div>;
};

export default BooksContainer;
