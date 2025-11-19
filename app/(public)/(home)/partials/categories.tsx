import { categoryData } from '@/features/categories/constants/category-data';
import type { Category } from '@/features/categories/types/category.types';
import Image from 'next/image';
import Link from 'next/link';

const Categories = () => {
  return (
    <div className='flex w-full flex-wrap items-start justify-start gap-3 md:gap-4'>
      {categoryData.map((category, index) => (
        <CategoryCard key={index} {...category} />
      ))}
    </div>
  );
};

export default Categories;

const CategoryCard = ({ title, image, slug }: Category) => {
  return (
    <Link href={`/categories/${slug}`} className='block flex-1 basis-28'>
      <div className='group shadow-light flex flex-col gap-3 rounded-2xl bg-white p-2 md:p-3'>
        <div className='bg-info-200 flex-center rounded-[10.5px] p-[5.6px] md:rounded-xl md:p-[6.4px]'>
          <div className='relative size-[44.8px] transition group-hover:scale-110 md:size-[51.2px]'>
            <Image src={image} alt={title} fill />
          </div>
        </div>

        <h3 className='text-xs-semibold md:text-md-semibold group-hover:text-primary-300 transition-colors'>
          {title}
        </h3>
      </div>
    </Link>
  );
};
