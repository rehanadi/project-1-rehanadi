import Image from 'next/image';
import Link from 'next/link';
import BookRating from './book-rating';
import { BookItem } from '../types/book.types';
import { AuthorBook } from '@/features/authors/types/author.types';

interface BookCardProps {
  book: BookItem | AuthorBook;
  authorName?: string;
}

const BookCard = ({ book, authorName }: BookCardProps) => {
  const defaultImage = '/images/book-placeholder.png';

  const displayAuthorName =
    'Author' in book ? book.Author.name : authorName || 'Unknown Author';

  return (
    <Link
      href={`/books/${book.id}`}
      className='shadow-light overflow-hidden rounded-xl transition-all hover:shadow-md'
    >
      <div className='relative aspect-224/336 w-full'>
        <Image
          src={book.coverImage || defaultImage}
          alt={book.title}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex flex-col gap-0.5 p-3'>
        <h3 className='text-md-bold line-clamp-1'>{book.title}</h3>
        <p className='text-sm-medium line-clamp-1 text-neutral-700'>
          {displayAuthorName}
        </p>
        <BookRating rating={book.rating} />
      </div>
    </Link>
  );
};

export default BookCard;
