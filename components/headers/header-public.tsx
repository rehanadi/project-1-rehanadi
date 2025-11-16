import { ChevronDown, Search } from 'lucide-react';
import Logo from '../logos/logo';
import { Input } from '../ui/input';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HeaderPublic = () => {
  return (
    <header className='custom-container flex-between h-16 gap-4 md:h-20'>
      <Logo />

      <div className='hidden h-11 w-[500px] items-center gap-1 rounded-full border border-neutral-300 px-4 md:flex md:gap-1.5'>
        <Search className='size-5 shrink-0 text-neutral-600' />

        <Input
          type='text'
          placeholder='Search book'
          className='input-search flex-1 border-0 outline-none'
        />
      </div>

      <div className='flex-center gap-6'>
        <Search className='block size-6 shrink-0 md:hidden' />

        <Link href='#' className='relative'>
          <Icon icon='lets-icons:bag-fill' className='size-7 md:size-8' />
          <div className='bg-danger-500 flex-center text-xs-bold absolute -top-1 -right-1 size-5 rounded-full text-white'>
            1
          </div>
        </Link>

        <div className='flex-center cursor-pointer gap-4'>
          <Avatar className='size-10 md:size-12'>
            <AvatarImage src='/images/avatar.png' />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>

          <span className='text-lg-semibold hidden md:block'>John Doe</span>

          <ChevronDown className='hidden size-6 cursor-pointer md:block' />
        </div>
      </div>
    </header>
  );
};

export default HeaderPublic;
