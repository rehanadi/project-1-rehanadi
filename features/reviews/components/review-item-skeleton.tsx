import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

const ReviewItemSkeleton = () => {
  return (
    <div className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'>
      <Skeleton className='h-6 w-40' />
      <Separator />
      <div className='flex gap-4'>
        <Skeleton className='h-[106px] w-[70px] md:h-[138px] md:w-[92px]' />
        <div className='flex flex-1 flex-col gap-2'>
          <Skeleton className='h-6 w-20' />
          <Skeleton className='h-6 w-3/4' />
          <Skeleton className='h-4 w-1/2' />
        </div>
      </div>
      <Separator />
      <div className='flex flex-col gap-2'>
        <Skeleton className='h-5 w-32' />
        <Skeleton className='h-16 w-full' />
      </div>
    </div>
  );
};

export default ReviewItemSkeleton;
