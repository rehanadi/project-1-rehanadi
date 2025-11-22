import LoanItemCard from '@/features/loans/components/loan-item-card';
import { Button } from '@/components/ui/button';
import { MyLoan } from '@/features/loans/types/loan.types';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { useMemo } from 'react';

interface LoanListProps {
  loans: MyLoan[];
  searchQuery: string;
  statusFilter: string;
  isLoading: boolean;
}

const LoanList = ({
  loans,
  searchQuery,
  statusFilter,
  isLoading,
}: LoanListProps) => {
  const filteredLoans = useMemo(() => {
    let filtered = loans;

    if (searchQuery) {
      filtered = filtered.filter((loan) =>
        loan.book.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'All') {
      const statusMap: Record<string, string> = {
        Active: 'BORROWED',
        Returned: 'RETURNED',
        Overdue: 'OVERDUE',
      };
      filtered = filtered.filter(
        (loan) => loan.status === statusMap[statusFilter]
      );
    }

    return filtered;
  }, [loans, searchQuery, statusFilter]);

  if (isLoading) {
    return (
      <div className='flex flex-col gap-3.75 md:gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'
          >
            <div className='flex-between gap-4'>
              <Skeleton className='h-6 w-32' />
              <Skeleton className='h-6 w-40' />
            </div>
            <Separator />
            <div className='flex gap-4'>
              <Skeleton className='h-[138px] w-[92px]' />
              <div className='flex flex-1 flex-col gap-2'>
                <Skeleton className='h-6 w-20' />
                <Skeleton className='h-6 w-3/4' />
                <Skeleton className='h-4 w-1/2' />
                <Skeleton className='h-4 w-2/3' />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (filteredLoans.length === 0) {
    return (
      <div className='text-center text-neutral-600'>
        {searchQuery || statusFilter !== 'All'
          ? 'No loans found.'
          : 'You have no borrowed books yet.'}
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-3.75 md:gap-4'>
      {filteredLoans.map((loan) => (
        <LoanItemCard key={loan.id} loan={loan} />
      ))}

      {filteredLoans.length > 10 && (
        <Button className='w-37.5 self-center md:w-50' variant='outline'>
          Load More
        </Button>
      )}
    </div>
  );
};

export default LoanList;
