import BookCard from './book-card';
import { bookData } from '@/features/books/constants/book-data';

const BookList = () => {
  return (
    <div className='flex flex-col gap-4'>
      {bookData.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
};

export default BookList;
