import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProfileInfoItem from './profile-info-item';
import { Button } from '@/components/ui/button';

const ProfileInfo = () => {
  return (
    <div className='shadow-light flex w-[557px] max-w-full flex-col gap-4 rounded-2xl bg-white p-4 md:gap-6 md:p-5'>
      <div className='flex flex-col gap-2 md:gap-3'>
        <Avatar className='size-16'>
          <AvatarImage src='/images/avatar.png' />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>

        <ProfileInfoItem label='Name' value='John Doe' />
        <ProfileInfoItem label='Email' value='johndoe@email.com' />
        <ProfileInfoItem label='Nomor Handphone' value='081234567890' />
      </div>

      <Button className='h-11 w-full md:h-11'>Update Profile</Button>
    </div>
  );
};

export default ProfileInfo;
