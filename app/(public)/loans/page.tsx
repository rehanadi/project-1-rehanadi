'use client';

import AccountTabs from '@/features/shared/components/account-tabs';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import LoanList from './partials/loan-list';
import LoansTitle from './partials/loans-title';
import LoansContainer from './partials/loans-container';
import { useState } from 'react';
import { useGetMyLoans } from '@/features/loans/hooks';
import { useAppSelector } from '@/lib/hooks';

const LoansPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const { myLoans } = useAppSelector((state) => state.loans);
  const { isLoading } = useGetMyLoans();

  return (
    <LoansContainer>
      <AccountTabs value='loans' />
      <LoansTitle />
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <StatusTabs value={statusFilter} onChange={setStatusFilter} />
      <LoanList
        loans={myLoans}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        isLoading={isLoading}
      />
    </LoansContainer>
  );
};

export default LoansPage;
