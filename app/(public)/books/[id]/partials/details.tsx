import Breadcrumbs from './breadcrumbs';
import BookInfo from '@/features/books/components/book-info';
import { BookDetail } from '@/features/books/types/book.types';

interface DetailsProps {
  book: BookDetail;
}

const Details = ({ book }: DetailsProps) => {
  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <Breadcrumbs book={book} />
      <BookInfo book={book} />
    </div>
  );
};

export default Details;
