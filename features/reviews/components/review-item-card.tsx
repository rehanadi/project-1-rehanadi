import { Badge } from '@/components/ui/badge';
import Ratings from '@/features/shared/components/ratings';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { MyReview } from '../types/review.types';
import dayjs from 'dayjs';
import { useGetBook } from '@/features/books/hooks';

interface ReviewItemCardProps {
  review: MyReview;
}

const ReviewItemCard = ({ review }: ReviewItemCardProps) => {
  const { data: bookData, isLoading: isLoadingBook } = useGetBook(
    review.bookId
  );

  const defaultImage = '/images/book-placeholder.png';
  const formattedDate = dayjs(review.createdAt).format('DD MMMM YYYY, HH:mm');

  return (
    <div className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'>
      <span className='md:text-md text-sm font-semibold'>{formattedDate}</span>

      <Separator />

      <div className='flex items-center justify-start gap-3 md:gap-4'>
        <div className='relative h-[106px] w-[70px] md:h-[138px] md:w-[92px]'>
          <Image
            src={review.book.coverImage || defaultImage}
            alt={review.book.title}
            fill
          />
        </div>

        <div className='flex flex-col gap-1'>
          {isLoadingBook ? (
            <Skeleton className='h-6 w-20' />
          ) : (
            <Badge variant='outline'>
              {bookData?.data.category.name || 'Category'}
            </Badge>
          )}
          <h3 className='text-md-bold md:text-lg-bold'>{review.book.title}</h3>
          {isLoadingBook ? (
            <Skeleton className='h-4 w-32' />
          ) : (
            <p className='text-sm-medium md:text-md-medium text-neutral-700'>
              {bookData?.data.author.name || 'Author'}
            </p>
          )}
        </div>
      </div>

      <Separator />

      <div className='flex flex-col gap-2'>
        <Ratings rating={review.star} />
        <p className='md:text-md text-sm font-semibold'>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewItemCard;
