import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className='flex h-11 w-[544px] max-w-full items-center gap-1 rounded-full border border-neutral-300 px-4 md:gap-1.5'>
      <Search className='size-5 shrink-0 text-neutral-600' />

      <Input
        type='text'
        placeholder='Search Reviews'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className='text-sm-medium flex-1 border-0 outline-none'
      />
    </div>
  );
};

export default SearchBox;
