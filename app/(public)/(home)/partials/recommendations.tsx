'use client';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import BookCard from '@/features/books/components/book-card';
import { useGetRecommendedBooks } from '@/features/books/hooks';
import { useAppSelector } from '@/lib/hooks';
import { useState } from 'react';

const Recommendations = () => {
  const [limit, setLimit] = useState(10);

  const { recommendedBooks } = useAppSelector((state) => state.books);

  const { isLoading, isError } = useGetRecommendedBooks({
    by: 'rating',
    limit,
  });

  const handleLoadMore = () => {
    setLimit((prev) => prev + 10);
  };

  if (isError) {
    return (
      <Section title='Recommendation'>
        <div className='text-danger-500 text-center'>
          Failed to load books. Please try again.
        </div>
      </Section>
    );
  }

  return (
    <Section title='Recommendation'>
      <div className='flex flex-col gap-5 md:gap-10'>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 lg:grid-cols-5'>
          {isLoading && recommendedBooks.length === 0
            ? Array.from({ length: 5 }).map((_, index) => (
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
              ))
            : recommendedBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
        </div>

        {isLoading && recommendedBooks.length > 0 && (
          <div className='text-center'>Loading...</div>
        )}

        {!isLoading && recommendedBooks.length > 0 && (
          <Button
            className='w-37.5 self-center md:w-50'
            variant='outline'
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </Section>
  );
};

export default Recommendations;
