import { loanData } from '@/features/loans/constants/loan-data';
import LoanItemCard from '@/features/loans/components/loan-item-card';
import { Button } from '@/components/ui/button';

const LoanList = () => {
  return (
    <div className='flex flex-col gap-3.75 md:gap-4'>
      {loanData.map((loan) => (
        <LoanItemCard key={loan.id} {...loan} />
      ))}

      <Button className='w-37.5 self-center md:w-50' variant='outline'>
        Load More
      </Button>
    </div>
  );
};

export default LoanList;
