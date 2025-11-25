import UserPagination from './user-pagination';
import UserCards from './user-cards';
import UserTable from './user-table';

interface UserListProps {
  isLoading: boolean;
  error: Error | null;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const UserList = ({
  isLoading,
  error,
  currentPage,
  onPageChange,
}: UserListProps) => {
  if (error) {
    return (
      <div className='md:shadow-light flex flex-col items-center justify-center gap-3.75 rounded-xl border border-neutral-300 p-8 md:gap-0 md:p-12'>
        <p className='text-md-medium text-neutral-600'>
          Failed to load users. Please try again.
        </p>
      </div>
    );
  }

  return (
    <div className='md:shadow-light flex flex-col gap-3.75 md:gap-0 md:rounded-xl md:border md:border-neutral-300 md:p-4'>
      <UserCards className='flex md:hidden' isLoading={isLoading} />
      <UserTable className='hidden md:block' isLoading={isLoading} />
      <UserPagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        isLoading={isLoading}
      />
    </div>
  );
};

export default UserList;
