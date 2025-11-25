import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');

  useDebounce(
    () => {
      setDebouncedValue(value);
    },
    500,
    [value]
  );

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div className='flex h-11 w-150 max-w-full items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 md:h-12'>
      <Search className='size-5 shrink-0 text-neutral-600' />

      <Input
        type='text'
        placeholder='Search book'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='text-sm-medium flex-1 border-0 outline-none'
      />
    </div>
  );
};

export default SearchBox;
