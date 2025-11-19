import BookCard from '@/features/books/components/book-card';
import { bookData } from '@/features/books/constants/book-data';

const Catalog = () => {
  return (
    <div className='grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
      {bookData.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
};

export default Catalog;
