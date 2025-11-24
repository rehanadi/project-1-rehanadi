import { Skeleton } from '@/components/ui/skeleton';

const ProfileInfoSkeleton = () => {
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
};

export default ProfileInfoSkeleton;
