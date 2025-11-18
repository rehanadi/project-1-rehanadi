import { Section } from '@/components/layouts/section';
import BookCard from '@/features/books/components/book-card';
import { bookData } from '@/features/books/constants/book-data';

const RelatedBooks = () => {
  return (
    <Section title='Related Books'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
        {bookData.slice(0, 5).map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>
    </Section>
  );
};

export default RelatedBooks;
