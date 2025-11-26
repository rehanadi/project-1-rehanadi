'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { ListFilter } from 'lucide-react';
import CategoryCheckbox from './category-checkbox';
import RatingCheckbox from './rating-checkbox';
import { useAppSelector } from '@/lib/hooks';
import { useGetCategories } from '@/features/categories/hooks';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  useGetCategories();

  return (
    <>
      <div className='shadow-light flex items-center justify-between rounded-xl p-3 md:hidden'>
        <h3 className='text-sm-extrabold flex-1 uppercase'>Filter</h3>
        <ListFilter
          className='size-5 cursor-pointer'
          onClick={() => setShowFilter(true)}
        />
      </div>

      <FilterBox className='hidden md:flex' />

      <FilterBox
        className={cn(
          'fixed top-0 left-0 z-70 h-screen w-screen p-4 md:hidden',
          !showFilter && 'hidden',
          showFilter && 'flex'
        )}
        onClose={() => setShowFilter(false)}
      />
    </>
  );
};

export default Filter;

const FilterBox = ({
  onClose = () => {},
  className,
}: {
  onClose?: () => void;
  className?: string;
}) => {
  const { categories } = useAppSelector((state) => state.categories);
  const searchParams = useSearchParams();
  const selectedCategoryId = searchParams.get('categoryId');
  const selectedRating = searchParams.get('rating');

  return (
    <div
      className={cn(
        'shadow-light relative w-[266px] shrink-0 flex-col gap-6 rounded-xl bg-white py-4',
        className
      )}
    >
      <div className='flex flex-col gap-2.5 px-4'>
        <h3 className='text-md-bold uppercase'>Filter</h3>
        <h4 className='text-lg-bold'>Category</h4>

        {categories.map((category) => (
          <CategoryCheckbox
            key={category.id}
            label={category.name}
            value={category.id.toString()}
            checked={selectedCategoryId === category.id.toString()}
          />
        ))}
      </div>

      <Separator />

      <div className='flex flex-col gap-2.5 px-4'>
        <h4 className='text-lg-bold'>Rating</h4>

        <div>
          {[5, 4, 3, 2, 1].map((rating) => (
            <RatingCheckbox
              key={rating}
              label={rating.toString()}
              value={rating.toString()}
              checked={selectedRating === rating.toString()}
            />
          ))}
        </div>
      </div>

      <X
        className='absolute top-4 right-8 block size-6 cursor-pointer md:hidden'
        onClick={onClose}
      />
    </div>
  );
};
