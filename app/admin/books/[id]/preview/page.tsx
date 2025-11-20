import BookInfo from '@/features/books/components/book-info';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PreviewBookPage = () => {
  return (
    <div className='flex flex-col gap-9 md:gap-8'>
      <div className='flex-start gap-1.5 md:gap-3'>
        <Link href='/admin/books'>
          <ArrowLeft className='size-6 md:size-8' />
        </Link>

        <h1 className='md:text-display-sm text-xl font-bold'>Preview Book</h1>
      </div>

      <BookInfo />
    </div>
  );
};

export default PreviewBookPage;
