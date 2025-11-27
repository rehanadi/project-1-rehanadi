'use client';

import { useState, useCallback, useEffect } from 'react';
import AdminTabs from '@/features/shared/components/admin-tabs';
import BooksContainer from './partials/books-container';
import BooksTitle from './partials/books-title';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import BookList from './partials/book-list';
import ButtonAdd from './partials/button-add';
import { useGetBooks } from '@/features/books/hooks';
import { useQueryClient } from '@tanstack/react-query';

const BooksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 10;
  const queryClient = useQueryClient();

  const { isLoading } = useGetBooks(
    {
      page: currentPage,
      limit,
      q: searchQuery,
    },
    currentPage > 1
  );

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Reset page and search when books are refetched after delete
  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((event) => {
      if (
        event?.type === 'updated' &&
        event?.query?.queryKey?.[0] === 'books' &&
        event?.action?.type === 'invalidate'
      ) {
        setCurrentPage(1);
        setSearchQuery('');
      }
    });

    return () => unsubscribe();
  }, [queryClient]);

  return (
    <>
      <AdminTabs value='books' />
      <BooksContainer>
        <BooksTitle />
        <ButtonAdd />
        <SearchBox onSearch={handleSearch} />
        <StatusTabs />
        <BookList
          searchQuery={searchQuery}
          isLoading={isLoading}
          onLoadMore={handleLoadMore}
        />
      </BooksContainer>
    </>
  );
};

export default BooksPage;
