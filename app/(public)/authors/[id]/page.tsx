'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AuthorContainer from './partials/author-container';
import AuthorInfo from './partials/author-info';
import BookList from './partials/book-list';
import AuthorSkeleton from './partials/author-skeleton';
import { useGetAuthorBooks } from '@/features/authors/hooks';
import { useAppSelector } from '@/lib/hooks';

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
  const books = authorBooks[authorId] || [];

  if (isLoading || !isCorrectAuthor || !currentAuthor) {
    return (
      <AuthorContainer>
        <AuthorSkeleton />
      </AuthorContainer>
    );
  }

  return (
    <AuthorContainer>
      <AuthorInfo author={currentAuthor} booksCount={books.length} />
      <BookList books={books} />
    </AuthorContainer>
  );
};

export default AuthorPage;
