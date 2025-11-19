import { Button } from '@/components/ui/button';
import Image from 'next/image';

const LoanSuccess = () => {
  return (
    <div className='flex w-[638px] max-w-full flex-col items-center gap-6 md:gap-8'>
      <Image
        src='/icons/success.svg'
        alt='Success'
        width={142.38}
        height={142.38}
      />

      <div className='flex flex-col items-center gap-2'>
        <h2 className='md:text-display-sm text-center text-xl font-bold'>
          Borrowing Successful!
        </h2>
        <p className='text-md text-center font-semibold md:text-lg'>
          Please return the book no later than{' '}
          <span className='text-danger-500'>31 August 2025</span>
        </p>
      </div>

      <Button className='h-12 w-[286px] max-w-full'>See Borrowed List</Button>
    </div>
  );
};

export default LoanSuccess;
