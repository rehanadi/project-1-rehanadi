import AccountTabs from '@/features/shared/components/account-tabs';
import ProfileContainer from './partials/profile-container';
import ProfileTitle from './partials/profile-title';
import ProfileInfo from './partials/profile-info';

const ProfilePage = () => {
  return (
    <ProfileContainer>
      <AccountTabs value='profile' />
      <ProfileTitle />
      <ProfileInfo />
    </ProfileContainer>
  );
};

export default ProfilePage;
