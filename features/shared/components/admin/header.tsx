import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ResponsiveLogo from '../responsive-logo';

const Header = () => {
  return (
    <header className='shadow-light sticky inset-x-0 top-0 z-50 h-16 w-full gap-4 bg-white md:h-20'>
      <div className='custom-container flex-between h-full'>
        <Link href='/'>
          <ResponsiveLogo />
        </Link>

        <div className='flex-center gap-6'>
          <div className='flex-center cursor-pointer gap-4'>
            <Avatar className='size-10 md:size-12'>
              <AvatarImage src='/images/avatar.png' />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>

            <span className='text-lg-semibold hidden md:block'>John Doe</span>

            <ChevronDown className='hidden size-6 cursor-pointer md:block' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
