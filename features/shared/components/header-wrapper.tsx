'use client';

import { Suspense } from 'react';
import Header from './header';

const HeaderFallback = () => {
  return (
    <header className='shadow-light sticky inset-x-0 top-0 z-50 h-16 w-full gap-4 bg-white md:h-20'>
      <div className='custom-container flex-between h-full'>
        <div className='h-8 w-32 animate-pulse rounded bg-neutral-200' />
      </div>
    </header>
  );
};

const HeaderWrapper = () => {
  return (
    <Suspense fallback={<HeaderFallback />}>
      <Header />
    </Suspense>
  );
};

export default HeaderWrapper;
