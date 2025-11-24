'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import Header from '@/features/shared/components/header';
import Footer from '@/features/shared/components/footer';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isAuthenticated && user?.role === 'ADMIN') {
      router.push('/admin/users');
    }
  }, [isAuthenticated, user, router, pathname]);

  if (isAuthenticated && user?.role === 'ADMIN') {
    return null;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
