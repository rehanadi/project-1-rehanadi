import UserInfoItem from './user-info-item';

const UserInfo = () => {
  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <h3 className='md:text-display-xs text-lg font-bold'>User Information</h3>
      <UserInfoItem label='Name' value='John Doe' />
      <UserInfoItem label='Email' value='johndoe@email.com' />
      <UserInfoItem label='Nomor Handphone' value='081234567890' />
    </div>
  );
};

export default UserInfo;
