import LoanItemCard from '@/features/loans/components/loan-item-card';
import { Button } from '@/components/ui/button';
import { MyLoan } from '@/features/loans/types/loan.types';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { useMemo } from 'react';

interface LoanListProps {
  loans: MyLoan[];
  searchQuery: string;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
  isLoading: boolean;
  onLoadMore: () => void;
}

const LoanList = ({
  loans,
  searchQuery,
  pagination,
  isLoading,
  onLoadMore,
}: LoanListProps) => {
  const filteredLoans = useMemo(() => {
    if (!searchQuery) return loans;

    return loans.filter((loan) =>
      loan.book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [loans, searchQuery]);

  if (isLoading && loans.length === 0) {
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
        {searchQuery ? 'No loans found.' : 'You have no borrowed books yet.'}
      </div>
    );
  }

  const showLoadMore = pagination && loans.length < pagination.total;

  return (
    <div className='flex flex-col gap-3.75 md:gap-4'>
      {filteredLoans.map((loan) => (
        <LoanItemCard key={loan.id} loan={loan} />
      ))}

      {isLoading && loans.length > 0 && (
        <div className='text-center'>Loading...</div>
      )}

      {showLoadMore && !isLoading && (
        <Button
          className='w-37.5 self-center md:w-50'
          variant='outline'
          onClick={onLoadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default LoanList;
