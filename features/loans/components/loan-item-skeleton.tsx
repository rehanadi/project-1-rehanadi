import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

const LoanItemSkeleton = () => {
  return (
    <div className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'>
      <div className='flex-between gap-4'>
        <Skeleton className='h-6 w-32' />
        <Skeleton className='h-6 w-40' />
      </div>
      <Separator />
      <div className='flex gap-4'>
        <Skeleton className='h-[138px] w-[92px]' />
        <div className='flex flex-1 flex-col gap-2'>
          <Skeleton className='h-6 w-20' />
          <Skeleton className='h-6 w-3/4' />
          <Skeleton className='h-4 w-1/2' />
          <Skeleton className='h-4 w-2/3' />
        </div>
      </div>
    </div>
  );
};

export default LoanItemSkeleton;
