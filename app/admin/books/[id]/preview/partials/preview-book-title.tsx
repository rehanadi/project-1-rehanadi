import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const PreviewBookTitle = () => {
  return (
    <div className='flex-start gap-1.5 md:gap-3'>
      <Link href='/admin/books'>
        <ArrowLeft className='size-6 md:size-8' />
      </Link>

      <h1 className='md:text-display-sm text-xl font-bold'>Preview Book</h1>
    </div>
  );
};

export default PreviewBookTitle;
