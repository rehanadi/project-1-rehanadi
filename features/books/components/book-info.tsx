import { Separator } from '@/components/ui/separator';
import BookRating from '@/features/books/components/book-rating';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { BookDetail } from '../types/book.types';
import Link from 'next/link';

interface BookInfoProps {
  book: BookDetail;
  onBorrow?: () => void;
  isBorrowing?: boolean;
  onAddCart?: () => void;
  isAddingCart?: boolean;
}

const BookInfo = ({
  book,
  onBorrow,
  isBorrowing = false,
  onAddCart,
  isAddingCart = false,
}: BookInfoProps) => {
  const defaultImage = '/images/book-placeholder.png';
  const isOutOfStock = book.stock === 0;

  return (
    <div className='flex flex-col gap-9 md:flex-row'>
      <div className='relative aspect-337/498 w-2/3 shrink-0 self-center md:w-1/3'>
        <Image src={book.coverImage || defaultImage} alt={book.title} fill />
      </div>

      <div className='flex flex-1 flex-col gap-4 md:gap-5'>
        <div className='flex flex-col gap-3 md:gap-5.5'>
          <div className='flex flex-col items-start gap-0.5 md:gap-1'>
            <Link href={`/books?categoryId=${book.Category.id}`}>
              <Badge variant='outline'>{book.Category.name}</Badge>
            </Link>
            <h1 className='text-display-xs md:text-display-sm font-bold'>
              {book.title}
            </h1>
            <Link href={`/authors/${book.Author.id}`}>
              <p className='text-sm-semibold md:text-md-semibold hover:text-primary-300 text-neutral-700 transition-colors'>
                {book.Author.name}
              </p>
            </Link>
            <BookRating rating={book.rating} />
          </div>

          <div className='flex flex-wrap gap-5'>
            <InfoCard title='Page' description={book.totalCopies.toString()} />
            <Separator orientation='vertical' />
            <InfoCard title='Rating' description={book.rating.toString()} />
            <Separator orientation='vertical' />
            <InfoCard
              title='Reviews'
              description={book.reviewCount.toString()}
            />
          </div>
        </div>

        <Separator className='md:max-w-[559px]' />

        <div className='flex flex-col gap-1'>
          <h2 className='text-xl-bold'>Description</h2>
          <p className='text-sm-medium md:text-md-medium'>{book.description}</p>
        </div>

        <div className='fixed inset-x-0 bottom-0 z-50 flex w-full items-start justify-between gap-3 bg-white p-4 md:static md:justify-start md:bg-transparent md:p-0'>
          <Button
            variant='outline'
            className='flex-1 md:w-50 md:flex-none'
            onClick={onAddCart}
            disabled={isAddingCart || isOutOfStock}
          >
            {isAddingCart
              ? 'Adding...'
              : isOutOfStock
                ? 'Out of Stock'
                : 'Add to Cart'}
          </Button>
          <Button
            className='flex-1 md:w-50 md:flex-none'
            onClick={onBorrow}
            disabled={isOutOfStock || isBorrowing}
          >
            {isBorrowing
              ? 'Borrowing...'
              : isOutOfStock
                ? 'Out of Stock'
                : 'Borrow Book'}
          </Button>
          <Button size='icon' variant='outline' className='shrink-0'>
            <Share2 className='size-5' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;

const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='basis-[94.67px] md:basis-[102px]'>
      <h4 className='md:text-display-xs text-lg font-bold'>{description}</h4>
      <p className='text-sm-medium md:text-md-medium'>{title}</p>
    </div>
  );
};
