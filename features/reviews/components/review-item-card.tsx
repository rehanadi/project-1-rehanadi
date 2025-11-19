import { Badge } from '@/components/ui/badge';
import Ratings from '@/features/shared/components/ratings';
import Separator from '@/features/shared/components/separator';
import Image from 'next/image';

const ReviewItemCard = () => {
  return (
    <div className='shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4 md:gap-5 md:p-5'>
      <span className='md:text-md text-sm font-semibold'>
        25 August 2025, 13:38
      </span>

      <Separator />

      <div className='flex items-center justify-start gap-3 md:gap-4'>
        <div className='relative h-[106px] w-[70px] md:h-[138px] md:w-[92px]'>
          <Image src='/images/books/yeti.png' alt='Book Name' fill />
        </div>

        <div className='flex flex-col gap-1'>
          <Badge variant='outline'>Category</Badge>
          <h3 className='text-md-bold md:text-lg-bold'>Book Name</h3>
          <p className='text-sm-medium md:text-md-medium text-neutral-700'>
            Author Name
          </p>
        </div>
      </div>

      <Separator />

      <div className='flex flex-col gap-2'>
        <Ratings />
        <p className='md:text-md text-sm font-semibold'>
          Lorem ipsum dolor sit amet consectetur. Pulvinar porttitor aliquam
          viverra nunc sed facilisis. Integer tristique nullam morbi mauris
          ante.
        </p>
      </div>
    </div>
  );
};

export default ReviewItemCard;
