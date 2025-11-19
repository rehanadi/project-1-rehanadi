import React from 'react';

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className='md:text-display-sm text-display-xs font-bold'>{children}</h1>
  );
};

export default Title;
