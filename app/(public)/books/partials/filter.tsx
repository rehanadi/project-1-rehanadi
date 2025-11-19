import { categoryData } from '@/features/categories/constants/category-data';
import Separator from '@/features/shared/components/separator';
import { ListFilter } from 'lucide-react';
import CategoryCheckbox from './category-checkbox';
import RatingCheckbox from './rating-checkbox';

const Filter = () => {
  return (
    <>
      <div className='shadow-light flex items-center justify-between rounded-xl p-3 md:hidden'>
        <h3 className='text-sm-extrabold flex-1 uppercase'>Filter</h3>
        <ListFilter className='size-5' />
      </div>

      <div className='shadow-light hidden w-[266px] shrink-0 flex-col gap-6 rounded-xl bg-white py-4 md:flex'>
        <div className='flex flex-col gap-2.5 px-4'>
          <h3 className='text-md-bold uppercase'>Filter</h3>
          <h4 className='text-lg-bold'>Category</h4>

          {categoryData.map((category, index) => (
            <CategoryCheckbox
              key={index}
              label={category.title}
              value={category.slug}
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
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
