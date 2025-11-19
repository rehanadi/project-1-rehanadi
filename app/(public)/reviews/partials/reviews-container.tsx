import React from 'react';

const ReviewsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='custom-container flex w-full max-w-250 flex-col gap-3.75 pt-4 pb-12 md:gap-6 md:pt-10 md:pb-9'>
      {children}
    </div>
  );
};

export default ReviewsContainer;
