'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import HeaderWrapper from '@/features/shared/components/header-wrapper';
import Footer from '@/features/shared/components/footer';

interface PrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {
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
      router.push('/');
    } else if (user?.role === 'ADMIN') {
      router.push('/admin/users');
    }
  }, [isAuthenticated, user, router, isChecking]);

  if (isChecking || !isAuthenticated || user?.role === 'ADMIN') {
    return null;
  }

  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PrivateLayout;
