import AccountTabs from '@/features/shared/components/account-tabs';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import LoanList from './partials/loan-list';
import LoanTitle from './partials/loan-title';
import LoansContainer from './partials/loans-container';

const LoansPage = () => {
  return (
    <LoansContainer>
      <AccountTabs value='loans' />
      <LoanTitle />
      <SearchBox />
      <StatusTabs />
      <LoanList />
    </LoansContainer>
  );
};

export default LoansPage;
