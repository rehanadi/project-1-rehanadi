import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useAppSelector } from '@/lib/hooks';
import { getPageNumbers } from '@/features/users/utils';

interface UserPaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
}

const UserPagination = ({
  currentPage,
  onPageChange,
  isLoading,
}: UserPaginationProps) => {
  const pagination = useAppSelector((state) => state.users.pagination);

  if (!pagination || isLoading) {
    return null;
  }

  const { page, limit, total, totalPages } = pagination;
  const startEntry = (page - 1) * limit + 1;
  const endEntry = Math.min(page * limit, total);

  const pageNumbers = getPageNumbers(currentPage, totalPages);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className='block h-auto px-0 md:flex md:h-16 md:items-center md:justify-between md:px-6'>
      <span className='text-md-medium hidden shrink-0 md:block'>
        Showing {startEntry} to {endEntry} of {total} entries
      </span>

      <Pagination className='md:flex-1 md:justify-end'>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={
                currentPage === 1
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>

          {pageNumbers.map((pageNum, index) =>
            pageNum === 'ellipsis' ? (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  onClick={() => onPageChange(pageNum)}
                  isActive={currentPage === pageNum}
                  className='cursor-pointer'
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={
                currentPage === totalPages
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default UserPagination;
