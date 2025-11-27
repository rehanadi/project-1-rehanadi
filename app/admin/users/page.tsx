'use client';

import { useState, useCallback } from 'react';
import AdminTabs from '@/features/shared/components/admin-tabs';
import SearchBox from './partials/search-box';
import UserList from './partials/user-list';
import UsersTitle from './partials/users-title';
import UsersContainer from './partials/users-container';
import { useGetUsers } from '@/features/users/hooks';

const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 10;

  const { data, isLoading, error } = useGetUsers({
    page: currentPage,
    limit,
    q: searchQuery,
  });

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <AdminTabs value='users' />
      <UsersContainer>
        <UsersTitle />
        <SearchBox onSearch={handleSearch} />
        <UserList
          isLoading={isLoading}
          error={error}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </UsersContainer>
    </>
  );
};

export default UsersPage;
