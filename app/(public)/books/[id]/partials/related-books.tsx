import { Section } from '@/components/layouts/section';
import { Skeleton } from '@/components/ui/skeleton';
import BookCard from '@/features/books/components/book-card';
import { BookItem } from '@/features/books/types/book.types';

interface RelatedBooksProps {
  books: BookItem[];
  isLoading: boolean;
}

const RelatedBooks = ({ books, isLoading }: RelatedBooksProps) => {
  if (isLoading) {
    return (
      <Section title='Related Books'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className='shadow-light overflow-hidden rounded-xl'
            >
              <Skeleton className='aspect-224/336 w-full' />
              <div className='flex flex-col gap-0.5 p-3'>
                <Skeleton className='h-4 w-full' />
                <Skeleton className='h-3 w-3/4' />
                <Skeleton className='h-3 w-1/2' />
              </div>
            </div>
          ))}
        </div>
      </Section>
    );
  }

  if (books.length === 0) {
    return (
      <Section title='Related Books'>
        <div className='text-center text-neutral-600'>
          No related books found.
        </div>
      </Section>
    );
  }

  return (
    <Section title='Related Books'>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </Section>
  );
};

export default RelatedBooks;
