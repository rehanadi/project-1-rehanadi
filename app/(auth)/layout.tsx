'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isChecking) return;

    if (isAuthenticated && user) {
      if (user.role === 'ADMIN') {
        router.push('/admin/users');
      } else {
        router.push('/');
      }
    }
  }, [isAuthenticated, user, router, isChecking]);

  if (!isChecking && isAuthenticated) {
    return null;
  }

  return <main className='flex-center min-h-screen'>{children}</main>;
};

export default AuthLayout;
