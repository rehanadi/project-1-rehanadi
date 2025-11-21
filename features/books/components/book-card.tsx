import Image from 'next/image';
import Link from 'next/link';
import type { BookItem } from '../types/book.types';
import BookRating from './book-rating';

interface BookCardProps {
  book: BookItem;
}

const BookCard = ({ book }: BookCardProps) => {
  const defaultImage = '/images/book-placeholder.png';

  return (
    <div className='shadow-light overflow-hidden rounded-xl'>
      <Link href={`/books/${book.id}`}>
        <div className='group relative aspect-224/336 w-full overflow-hidden'>
          <Image
            src={book.coverImage || defaultImage}
            alt={book.title}
            fill
            className='transition group-hover:scale-110'
          />
        </div>
      </Link>

      <div className='flex flex-col gap-0.5 p-3'>
        <Link href={`/books/${book.id}`}>
          <h3 className='text-sm-bold hover:text-primary-300 text-neutral-900 transition-colors'>
            {book.title}
          </h3>
        </Link>
        <p className='text-sm-medium text-neutral-700'>{book.author.name}</p>
        <BookRating rating={book.rating} />
      </div>
    </div>
  );
};

export default BookCard;
