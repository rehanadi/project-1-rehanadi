'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Separator } from '@/components/ui/separator';
import Details from './partials/details';
import Reviews from './partials/reviews';
import RelatedBooks from './partials/related-books';
import BookContainer from './partials/book-container';
import { useGetBook, useGetRelatedBooks } from '@/features/books/hooks';
import { useAppSelector } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';

const BookPage = () => {
  const params = useParams();
  const router = useRouter();
  const bookId = Number(params.id);

  const { currentBook, relatedBooks } = useAppSelector((state) => state.books);
  const {
    isLoading: isLoadingBook,
    isError: isErrorBook,
    refetch: refetchBook,
  } = useGetBook(bookId);
  const { isLoading: isLoadingRelated, refetch: refetchRelated } =
    useGetRelatedBooks(currentBook?.categoryId || 0, !!currentBook);

  useEffect(() => {
    refetchBook();
  }, [bookId, refetchBook]);

  useEffect(() => {
    if (currentBook) {
      refetchRelated();
    }
  }, [currentBook?.categoryId, refetchRelated, currentBook]);

  useEffect(() => {
    if (isErrorBook) {
      router.push('/');
    }
  }, [isErrorBook, router]);

  const isCorrectBook = currentBook?.id === bookId;

  if (isLoadingBook || !isCorrectBook || !currentBook) {
    return (
      <BookContainer>
        <div className='flex flex-col gap-4 md:gap-6'>
          <Skeleton className='h-5 w-full max-w-md' />
          <div className='flex flex-col gap-9 md:flex-row'>
            <Skeleton className='aspect-337/498 w-2/3 self-center md:w-1/3' />
            <div className='flex flex-1 flex-col gap-4'>
              <Skeleton className='h-8 w-3/4' />
              <Skeleton className='h-6 w-1/2' />
              <Skeleton className='h-20 w-full' />
            </div>
          </div>
        </div>
        <Separator />
        <Skeleton className='h-40 w-full' />
        <Separator />
        <Skeleton className='h-60 w-full' />
      </BookContainer>
    );
  }

  const filteredRelatedBooks = relatedBooks
    .filter((book) => book.id !== bookId)
    .slice(0, 5);

  return (
    <BookContainer>
      <Details book={currentBook} />
      <Separator />
      <Reviews reviews={currentBook.reviews} rating={currentBook.rating} />
      <Separator />
      <RelatedBooks books={filteredRelatedBooks} isLoading={isLoadingRelated} />
    </BookContainer>
  );
};

export default BookPage;
