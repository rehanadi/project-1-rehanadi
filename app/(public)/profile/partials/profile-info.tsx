'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import ProfileInfoItem from './profile-info-item';
import { Button } from '@/components/ui/button';
import { useGetMyProfile } from '@/features/auth/hooks';
import { useAppSelector } from '@/lib/hooks';

const ProfileInfo = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { isLoading } = useGetMyProfile();

  if (isLoading) {
    return (
      <div className='shadow-light flex w-[557px] max-w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-6 md:p-5'>
        <div className='flex flex-col gap-2 md:gap-3'>
          <Skeleton className='size-16 rounded-full' />
          <div className='flex flex-col gap-4'>
            <div className='flex-between gap-4'>
              <Skeleton className='h-6 w-32' />
              <Skeleton className='h-6 w-40' />
            </div>
            <div className='flex-between gap-4'>
              <Skeleton className='h-6 w-32' />
              <Skeleton className='h-6 w-48' />
            </div>
            <div className='flex-between gap-4'>
              <Skeleton className='h-6 w-32' />
              <Skeleton className='h-6 w-36' />
            </div>
          </div>
        </div>
        <Skeleton className='h-11 w-full' />
      </div>
    );
  }

  if (!user) {
    return (
      <div className='shadow-light flex w-[557px] max-w-full flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8'>
        <p className='text-center text-neutral-600'>Failed to load profile</p>
      </div>
    );
  }

  return (
    <div className='shadow-light flex w-[557px] max-w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-6 md:p-5'>
      <div className='flex flex-col gap-2 md:gap-3'>
        <Avatar className='size-16'>
          <AvatarImage src='/images/avatar.png' />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>

        <ProfileInfoItem label='Name' value={user.name} />
        <ProfileInfoItem label='Email' value={user.email} />
        <ProfileInfoItem label='Nomor Handphone' value='-' />
      </div>

      <Button className='h-11 w-full md:h-11'>Update Profile</Button>
    </div>
  );
};

export default ProfileInfo;
