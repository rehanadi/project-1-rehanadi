'use client';

import AccountTabs from '@/features/shared/components/account-tabs';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import LoanList from './partials/loan-list';
import LoansTitle from './partials/loans-title';
import LoansContainer from './partials/loans-container';
import { useState, useEffect } from 'react';
import { useGetMyLoans } from '@/features/loans/hooks';
import { useAppSelector } from '@/lib/hooks';

const LoansPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [page, setPage] = useState(1);

  const { myLoans, pagination } = useAppSelector((state) => state.loans);

  const statusMap: Record<
    string,
    'BORROWED' | 'RETURNED' | 'LATE' | undefined
  > = {
    All: undefined,
    Active: 'BORROWED',
    Returned: 'RETURNED',
    Overdue: 'LATE',
  };

  const { isLoading, refetch } = useGetMyLoans(
    {
      page,
      limit: 10,
      status: statusMap[statusFilter],
    },
    page > 1
  );

  useEffect(() => {
    setPage(1);
    refetch();
  }, [statusFilter, refetch]);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <LoansContainer>
      <AccountTabs value='loans' />
      <LoansTitle />
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <StatusTabs value={statusFilter} onChange={setStatusFilter} />
      <LoanList
        loans={myLoans}
        searchQuery={searchQuery}
        pagination={pagination}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </LoansContainer>
  );
};

export default LoansPage;
