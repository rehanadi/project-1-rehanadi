'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && user) {
      if (user.role === 'ADMIN') {
        router.push('/admin/users');
      } else {
        router.push('/');
      }
    }
  }, [isAuthenticated, user, router]);

  if (isAuthenticated) {
    return null;
  }

  return <main className='flex-center min-h-screen'>{children}</main>;
};

export default AuthLayout;
