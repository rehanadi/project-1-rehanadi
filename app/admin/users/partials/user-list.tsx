import UserPagination from './user-pagination';
import UserCards from './user-cards';
import UserTable from './user-table';

const UserList = () => {
  return (
    <div className='md:shadow-light flex flex-col gap-3.75 md:gap-0 md:rounded-xl md:border md:border-neutral-300 md:p-4'>
      <UserCards className='flex md:hidden' />
      <UserTable className='hidden md:block' />
      <UserPagination />
    </div>
  );
};

export default UserList;
