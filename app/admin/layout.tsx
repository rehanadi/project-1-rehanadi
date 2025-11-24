'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import Header from '@/features/shared/components/admin/header';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
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

    if (!isAuthenticated) {
      router.push('/login');
    } else if (user?.role === 'USER') {
      router.push('/');
    }
  }, [isAuthenticated, user, router, isChecking]);

  if (isChecking || !isAuthenticated || user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <>
      <Header />
      <main className='custom-container flex w-full flex-col gap-3.75 pt-4 pb-26.75 md:gap-7.5 md:pt-12 md:pb-22.5'>
        {children}
      </main>
    </>
  );
};

export default AdminLayout;
