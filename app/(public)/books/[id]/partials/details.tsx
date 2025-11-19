import Separator from '@/features/shared/components/separator';
import BookRating from '@/features/books/components/book-rating';
import Image from 'next/image';
import Breadcrumbs from './breadcrumbs';
import { Button } from '@/components/ui/button';
import { Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Details = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <Breadcrumbs />
      <div className='flex flex-col gap-9 md:flex-row'>
        <div className='relative aspect-337/498 w-2/3 shrink-0 self-center md:w-1/3'>
          <Image
            src='/images/books/the-psychology-of-money.png'
            alt='The Psychology of Money Book'
            fill
          />
        </div>

        <div className='flex flex-1 flex-col gap-4 md:gap-5'>
          <div className='flex flex-col gap-3 md:gap-5.5'>
            <div className='flex flex-col items-start gap-0.5 md:gap-1'>
              <Badge variant='outline'>Business & Economics</Badge>
              <h1 className='text-display-xs md:text-display-sm font-bold'>
                The Psychology of Money
              </h1>
              <p className='text-sm-semibold md:text-md-semibold text-neutral-700'>
                Morgan Housel
              </p>
              <BookRating rating={4.9} />
            </div>

            <div className='flex flex-wrap gap-5'>
              <InfoCard title='Page' description='320' />
              <Separator isVertical />
              <InfoCard title='Rating' description='212' />
              <Separator isVertical />
              <InfoCard title='Reviews' description='179' />
            </div>
          </div>

          <Separator className='md:max-w-[559px]' />

          <div className='flex flex-col gap-1'>
            <h2 className='text-xl-bold'>Description</h2>
            <p className='text-sm-medium md:text-md-medium'>
              The Psychology of Money” explores how emotions, biases, and human
              behavior shape the way we think about money, investing, and
              financial decisions. Morgan Housel shares timeless lessons on
              wealth, greed, and happiness, showing that financial success is
              not about knowledge, but about behavior.
            </p>
          </div>

          <div className='fixed inset-x-0 bottom-0 z-50 flex w-full items-start justify-between gap-3 bg-white p-4 md:static md:justify-start md:bg-transparent md:p-0'>
            <Button variant='outline' className='flex-1 md:w-50 md:flex-none'>
              Add to Cart
            </Button>
            <Button className='flex-1 md:w-50 md:flex-none'>Borrow Book</Button>
            <Button size='icon' variant='outline' className='shrink-0'>
              <Share2 className='size-5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

const InfoCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className='basis-[94.67px] md:basis-[102px]'>
      <h4 className='md:text-display-xs text-lg font-bold'>{description}</h4>
      <p className='text-sm-medium md:text-md-medium'>{title}</p>
    </div>
  );
};
