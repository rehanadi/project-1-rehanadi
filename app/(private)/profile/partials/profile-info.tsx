'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProfileInfoItem from './profile-info-item';
import ProfileInfoSkeleton from './profile-info-skeleton';
import { Button } from '@/components/ui/button';
import { useGetMyProfile } from '@/features/auth/hooks';
import { useAppSelector } from '@/lib/hooks';
import { Field } from '@/features/shared/types/field.types';

const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { isLoading } = useGetMyProfile();

  if (isLoading) {
    return <ProfileInfoSkeleton />;
  }

  if (!user) {
    return (
      <div className='shadow-light flex w-[557px] max-w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8'>
        <p className='text-center text-neutral-600'>Failed to load profile</p>
      </div>
    );
  }

  const profileInfoItems: Field[] = [
    { label: 'Name', value: user.name },
    { label: 'Email', value: user.email },
    { label: 'Nomor Handphone', value: '-' },
  ];

  return (
    <div className='shadow-light flex w-[557px] max-w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-6 md:p-5'>
      <div className='flex flex-col gap-2 md:gap-3'>
        <Avatar className='size-16'>
          <AvatarImage src='/images/avatar.png' />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>

        {profileInfoItems.map((item) => (
          <ProfileInfoItem
            key={item.label}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      <Button className='h-11 w-full md:h-11'>Update Profile</Button>
    </div>
  );
};

export default ProfileInfo;
