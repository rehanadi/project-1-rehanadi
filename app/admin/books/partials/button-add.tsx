import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ButtonAdd = () => {
  return (
    <Button asChild className='h-11 w-60 max-w-full md:h-12'>
      <Link href='/admin/books/add'>Add Book</Link>
    </Button>
  );
};

export default ButtonAdd;
