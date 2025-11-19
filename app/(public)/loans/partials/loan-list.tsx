import { loanData } from '@/features/loans/constants/loan-data';
import LoanItemCard from '@/features/loans/components/loan-item-card';

const LoanList = () => {
  return (
    <div className='flex flex-col gap-3.75 md:gap-4'>
      {loanData.map((loan) => (
        <LoanItemCard key={loan.id} {...loan} />
      ))}
    </div>
  );
};

export default LoanList;
