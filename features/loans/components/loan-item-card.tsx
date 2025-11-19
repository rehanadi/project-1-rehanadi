import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Separator from '@/features/shared/components/separator';
import Image from 'next/image';
import { LoanItem } from '../types/loan.types';

const LoanItemCard = ({
  id,
  status,
  book,
  borrowedDate,
  dueDate,
  durationDays,
}: LoanItem) => {
  return (
    <div className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'>
      <div className='flex-between gap-4'>
        <div className='flex-start gap-1 md:gap-3'>
          <span className='md:text-md text-sm font-bold'>Status</span>
          <Badge variant={status === 'Overdue' ? 'danger' : 'success'}>
            {status}
          </Badge>
        </div>

        <div className='flex-start gap-1 md:gap-3'>
          <span className='md:text-md text-sm font-bold'>Due Date</span>
          <Badge variant='danger'>{dueDate}</Badge>
        </div>
      </div>

      <Separator />

      <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-4'>
        <div className='flex-center gap-4'>
          <Image
            src={book.image}
            alt={book.title}
            width={92}
            height={138}
            className='shrink-0'
          />

          <div className='flex flex-1 flex-col gap-1'>
            <Badge variant='outline'>Category</Badge>

            <h3 className='text-md font-bold md:text-xl'>{book.title}</h3>

            <p className='md:text-md text-sm font-medium text-neutral-700'>
              {book.author}
            </p>

            <div className='flex-start md:text-md gap-2 text-sm font-bold'>
              <span>{borrowedDate}</span>
              <div className='size-0.5 rounded-full bg-neutral-950'></div>
              <span>Duration {durationDays} Days</span>
            </div>
          </div>
        </div>

        <Button className='w-full md:h-10 md:w-[182px]'>Give Review</Button>
      </div>
    </div>
  );
};

export default LoanItemCard;
