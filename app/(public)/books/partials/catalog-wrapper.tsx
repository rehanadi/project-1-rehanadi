'use client';

import { Suspense } from 'react';
import Catalog from './catalog';
import { Skeleton } from '@/components/ui/skeleton';

const CatalogFallback = () => {
  return (
    <div className='grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className='shadow-light overflow-hidden rounded-xl'>
          <Skeleton className='aspect-224/336 w-full' />
          <div className='flex flex-col gap-0.5 p-3'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-3 w-3/4' />
            <Skeleton className='h-3 w-1/2' />
          </div>
        </div>
      ))}
    </div>
  );
};

const CatalogWrapper = () => {
  return (
    <Suspense fallback={<CatalogFallback />}>
      <Catalog />
    </Suspense>
  );
};

export default CatalogWrapper;
