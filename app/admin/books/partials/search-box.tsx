import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBox = () => {
  return (
    <div className='flex h-11 w-150 max-w-full items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 md:h-12'>
      <Search className='size-5 shrink-0 text-neutral-600' />

      <Input
        type='text'
        placeholder='Search book'
        className='text-sm-medium flex-1 border-0 outline-none'
      />
    </div>
  );
};

export default SearchBox;
