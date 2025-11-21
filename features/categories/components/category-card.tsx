import type { CategoryItem } from '@/features/categories/types/category.types';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  category: CategoryItem;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const getImagePath = (name: string) => {
    try {
      return `/icons/categories/${name}.svg`;
    } catch {
      return '/icons/categories/Fiction.svg';
    }
  };

  return (
    <Link
      href={`/books/categoryId=${category.id}`}
      className='block flex-1 basis-28'
    >
      <div className='group shadow-light flex flex-col gap-3 rounded-2xl bg-white p-2 md:p-3'>
        <div className='bg-info-200 flex-center rounded-[10.5px] p-[5.6px] md:rounded-xl md:p-[6.4px]'>
          <div className='relative size-[44.8px] transition group-hover:scale-110 md:size-[51.2px]'>
            <Image
              src={getImagePath(category.name)}
              alt={category.name}
              fill
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/icons/categories/Fiction.svg';
              }}
            />
          </div>
        </div>

        <h3 className='text-xs-semibold md:text-md-semibold group-hover:text-primary-300 transition-colors'>
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
