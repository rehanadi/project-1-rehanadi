'use client';

import { ChevronDown, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ResponsiveLogo from './responsive-logo';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/lib/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';

const Header = () => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');
  const [isHydrated, setIsHydrated] = useState(false);

  const totalCartItems = items.length;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useDebounce(
    () => {
      if (searchValue.trim()) {
        const params = new URLSearchParams(searchParams.toString());
        params.set('q', searchValue.trim());
        router.push(`/books?${params.toString()}`);
      } else if (searchParams.get('q')) {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('q');
        const queryString = params.toString();
        router.push(queryString ? `/books?${queryString}` : '/books');
      }
    },
    500,
    [searchValue]
  );

  useEffect(() => {
    const currentQuery = searchParams.get('q');
    if (currentQuery !== searchValue) {
      setSearchValue(currentQuery || '');
    }
  }, [searchParams]);

  if (!isHydrated) {
    return (
      <header className='shadow-light sticky inset-x-0 top-0 z-50 h-16 w-full gap-4 bg-white md:h-20'>
        <div className='custom-container flex-between h-full'>
          <Link href='/'>
            <ResponsiveLogo />
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header className='shadow-light sticky inset-x-0 top-0 z-50 h-16 w-full gap-4 bg-white md:h-20'>
      <div className='custom-container flex-between h-full'>
        <Link href='/'>
          <ResponsiveLogo />
        </Link>

        {isAuthenticated ? (
          <>
            <div className='hidden h-11 w-[500px] items-center gap-1 rounded-full border border-neutral-300 px-4 md:flex md:gap-1.5'>
              <Search className='size-5 shrink-0 text-neutral-600' />

              <Input
                type='text'
                placeholder='Search book'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='flex-1 border-0 outline-none'
              />
            </div>

            <div className='flex-center gap-6'>
              <Search className='block size-6 shrink-0 md:hidden' />

              <Link href='/cart' className='relative'>
                <Icon icon='lets-icons:bag-fill' className='size-7 md:size-8' />
                {totalCartItems > 0 && (
                  <div className='bg-danger-500 flex-center text-xs-bold absolute -top-1 -right-1 size-5 rounded-full text-white'>
                    {totalCartItems}
                  </div>
                )}
              </Link>

              <div className='flex-center cursor-pointer gap-4'>
                <Avatar className='size-10 md:size-12'>
                  <AvatarImage src='/images/avatar.png' />
                  <AvatarFallback>{user?.name?.[0] || 'U'}</AvatarFallback>
                </Avatar>

                <span className='text-lg-semibold hidden md:block'>
                  {user?.name || 'User'}
                </span>

                <ChevronDown className='hidden size-6 cursor-pointer md:block' />
              </div>
            </div>
          </>
        ) : (
          <div className='flex-center gap-4'>
            <Button variant='outline' className='w-[163px]' asChild>
              <Link href='/login'>Login</Link>
            </Button>

            <Button className='w-[163px]' asChild>
              <Link href='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
