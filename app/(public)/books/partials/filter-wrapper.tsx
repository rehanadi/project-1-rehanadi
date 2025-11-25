'use client';

import { Suspense } from 'react';
import Filter from './filter';

const FilterFallback = () => {
  return (
    <>
      <div className='shadow-light flex items-center justify-between rounded-xl p-3 md:hidden'>
        <div className='h-4 w-16 animate-pulse rounded bg-neutral-200' />
        <div className='size-5 animate-pulse rounded bg-neutral-200' />
      </div>

      <div className='shadow-light hidden w-[266px] shrink-0 flex-col gap-6 rounded-xl bg-white py-4 md:flex'>
        <div className='flex flex-col gap-2.5 px-4'>
          <div className='h-4 w-20 animate-pulse rounded bg-neutral-200' />
          <div className='h-5 w-24 animate-pulse rounded bg-neutral-200' />
          <div className='h-4 w-full animate-pulse rounded bg-neutral-200' />
          <div className='h-4 w-full animate-pulse rounded bg-neutral-200' />
          <div className='h-4 w-full animate-pulse rounded bg-neutral-200' />
        </div>
      </div>
    </>
  );
};

const FilterWrapper = () => {
  return (
    <Suspense fallback={<FilterFallback />}>
      <Filter />
    </Suspense>
  );
};

export default FilterWrapper;
