'use client';

import { useAppSelector } from '@/lib/hooks';
import UserInfoItem from './user-info-item';

const UserInfo = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className='flex flex-col gap-2 md:gap-4'>
      <h3 className='md:text-display-xs text-lg font-bold'>User Information</h3>
      <UserInfoItem label='Name' value={user?.name || '-'} />
      <UserInfoItem label='Email' value={user?.email || '-'} />
      <UserInfoItem label='Nomor Handphone' value='-' />
    </div>
  );
};

export default UserInfo;
