'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AuthorContainer from './partials/author-container';
import AuthorInfo from './partials/author-info';
import BookList from './partials/book-list';
import { useGetAuthorBooks } from '@/features/authors/hooks';
import { useAppSelector } from '@/lib/hooks';
import { Skeleton } from '@/components/ui/skeleton';
import { Section } from '@/components/layouts/section';

const AuthorPage = () => {
  const params = useParams();
  const router = useRouter();
  const authorId = Number(params.id);

  const { currentAuthor, authorBooks } = useAppSelector(
    (state) => state.authors
  );
  const { isLoading, isError, refetch } = useGetAuthorBooks(authorId);

  useEffect(() => {
    refetch();
  }, [authorId, refetch]);

  useEffect(() => {
    if (isError) {
      router.push('/');
    }
  }, [isError, router]);

  const isCorrectAuthor = currentAuthor?.id === authorId;

  if (isLoading || !isCorrectAuthor || !currentAuthor) {
    return (
      <AuthorContainer>
        <div className='shadow-light flex-start flex gap-3 rounded-xl p-3 md:gap-4 md:p-4'>
          <Skeleton className='size-15 rounded-full md:size-[81px]' />
          <div className='flex flex-1 flex-col gap-0.5'>
            <Skeleton className='h-5 w-3/4 md:h-6' />
            <Skeleton className='h-4 w-1/2' />
          </div>
        </div>

        <Section title='Book List' className='gap-4 md:gap-8'>
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
      </AuthorContainer>
    );
  }

  const books = authorBooks[authorId] || [];

  return (
    <AuthorContainer>
      <AuthorInfo author={currentAuthor} booksCount={books.length} />
      <BookList books={books} />
    </AuthorContainer>
  );
};

export default AuthorPage;
