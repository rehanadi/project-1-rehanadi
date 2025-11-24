import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface CartItemCardProps {
  title: string;
  author: string;
  category: string;
  image: string;
  isLoadingDetails?: boolean;
}

const CartItemCard = ({
  title,
  author,
  category,
  image,
  isLoadingDetails = false,
}: CartItemCardProps) => {
  const defaultImage = '/images/book-placeholder.png';

  return (
    <div className='flex flex-1 items-center gap-3 md:gap-4'>
      <Image
        src={image || defaultImage}
        alt={title}
        width={64}
        height={96}
        className='shrink-0'
      />

      <div className='flex flex-1 flex-col gap-1'>
        {isLoadingDetails ? (
          <Skeleton className='h-5 w-20' />
        ) : (
          <Badge variant='outline'>{category || 'Category'}</Badge>
        )}
        <h3 className='text-md-bold md:text-lg-bold line-clamp-1'>{title}</h3>
        {isLoadingDetails ? (
          <Skeleton className='h-4 w-32' />
        ) : (
          <p className='text-sm-medium md:text-md-medium text-neutral-700'>
            {author || 'Author name'}
          </p>
        )}
      </div>
    </div>
  );
};

export default CartItemCard;
