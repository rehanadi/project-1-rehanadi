import React from 'react';
import Header from '@/features/shared/components/admin/header';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
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
