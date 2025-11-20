import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import BookRating from '@/features/books/components/book-rating';
import { Ellipsis } from 'lucide-react';
import { Book } from '@/features/books/types/book.types';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BookCard = ({ title, author, rating, image }: Book) => {
  return (
    <div className='shadow-light flex-between rounded-2xl bg-white p-4 md:p-5'>
      <div className='flex-start flex-1 gap-3 md:gap-4'>
        <Image src={image} alt={title} width={92} height={138} />

        <div className='flex flex-col gap-0.5'>
          <Badge variant='outline'>Business & Economics</Badge>
          <h3 className='text-sm font-bold md:text-lg'>{title}</h3>
          <p className='md:text-md text-sm font-medium text-neutral-700'>
            {author}
          </p>
          <BookRating rating={rating} />
        </div>
      </div>

      <Ellipsis className='block size-6 cursor-pointer md:hidden' />

      <div className='hidden md:flex md:items-center md:gap-3.25'>
        <Button variant='outline' asChild className='h-12 w-[95px]'>
          <Link href='/admin/books/1/preview'>Preview</Link>
        </Button>
        <Button variant='outline' asChild className='h-12 w-[95px]'>
          <Link href='/admin/books/1/edit'>Edit</Link>
        </Button>
        <Button variant='danger' className='h-12 w-[95px]'>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
