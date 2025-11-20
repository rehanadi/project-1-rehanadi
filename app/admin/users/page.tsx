import AdminTabs from '@/features/shared/components/admin/admin-tabs';
import SearchBox from './partials/search-box';
import UserList from './partials/user-list';
import UsersTitle from './partials/users-title';
import UsersContainer from './partials/users-container';

const UsersPage = () => {
  return (
    <>
      <AdminTabs value='users' />
      <UsersContainer>
        <UsersTitle />
        <SearchBox />
        <UserList />
      </UsersContainer>
    </>
  );
};

export default UsersPage;
