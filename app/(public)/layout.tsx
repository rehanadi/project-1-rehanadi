import React from 'react';
import HeaderPublic from '@/components/headers/header-public';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <HeaderPublic />
      <main>{children}</main>
    </>
  );
};

export default PublicLayout;
