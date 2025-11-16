import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { bookData } from '@/constants/book-data';
import BookCard from '@/features/books/components/book-card';

const Recommendations = () => {
  return (
    <Section title='Recommendation'>
      <div className='flex flex-col gap-5 md:gap-10'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {bookData.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>

        <Button className='w-37.5 self-center md:w-50' variant='outline'>
          Load More
        </Button>
      </div>
    </Section>
  );
};

export default Recommendations;
