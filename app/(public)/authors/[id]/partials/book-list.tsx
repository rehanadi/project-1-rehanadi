import { Section } from '@/components/layouts/section';
import BookCard from '@/features/books/components/book-card';
import { bookData } from '@/features/books/constants/book-data';

const BookList = () => {
  return (
    <Section title='Book List' className='gap-4 md:gap-8'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
        {bookData.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </Section>
  );
};

export default BookList;
