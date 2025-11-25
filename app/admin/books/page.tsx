'use client';

import { useState, useCallback } from 'react';
import AdminTabs from '@/features/shared/components/admin/admin-tabs';
import BooksContainer from './partials/books-container';
import BooksTitle from './partials/books-title';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import BookList from './partials/book-list';
import ButtonAdd from './partials/button-add';
import { useGetBooks } from '@/features/books/hooks';

const BooksPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 10;

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
