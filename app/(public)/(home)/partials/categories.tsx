'use client';

import CategoryCard from '@/features/categories/components/category-card';
import { useGetCategories } from '@/features/categories/hooks';
import { useAppSelector } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';

const Categories = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const { isLoading, isError } = useGetCategories();

  if (isError) {
    return (
      <div className='text-danger-500 text-center'>
        Failed to load categories. Please try again.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='flex w-full flex-wrap items-start justify-start gap-3 md:gap-4'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='flex-1 basis-28'>
            <div className='shadow-light flex flex-col gap-3 rounded-2xl bg-white p-2 md:p-3'>
              <div className='bg-info-200 flex-center rounded-[10.5px] p-[5.6px] md:rounded-xl md:p-[6.4px]'>
                <Skeleton className='size-[44.8px] md:size-[51.2px]' />
              </div>
              <Skeleton className='h-4 w-full' />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='flex w-full flex-wrap items-start justify-start gap-3 md:gap-4'>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
