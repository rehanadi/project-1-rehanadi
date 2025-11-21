'use client';

import BookCard from '@/features/books/components/book-card';
import { useGetCatalogBooks } from '@/features/books/hooks';
import { useAppSelector } from '@/lib/hooks';
import { useSearchParams } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { useMemo, useEffect } from 'react';

const Catalog = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const rating = searchParams.get('rating');
  const q = searchParams.get('q');

  const { catalogBooks } = useAppSelector((state) => state.books);

  const { isLoading, isError, refetch } = useGetCatalogBooks({
    page: 1,
    limit: 50,
    categoryId: categoryId ? Number(categoryId) : undefined,
    q: q || undefined,
  });

  useEffect(() => {
    refetch();
  }, [categoryId, q, refetch]);

  const filteredBooks = useMemo(() => {
    if (!rating) return catalogBooks;

    const minRating = Number(rating);
    return catalogBooks.filter((book) => Math.floor(book.rating) >= minRating);
  }, [catalogBooks, rating]);

  if (isError) {
    return (
      <div className='text-danger-500 flex-1 text-center'>
        Failed to load books. Please try again.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className='shadow-light overflow-hidden rounded-xl'>
            <Skeleton className='aspect-224/336 w-full' />
            <div className='flex flex-col gap-0.5 p-3'>
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-3 w-3/4' />
              <Skeleton className='h-3 w-1/2' />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredBooks.length === 0) {
    return (
      <div className='flex-1 text-center text-neutral-600'>No books found.</div>
    );
  }

  return (
    <div className='grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4'>
      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Catalog;
