'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

interface AccountTabsProps {
  value: 'profile' | 'loans' | 'reviews';
}

const AccountTabs = ({ value }: AccountTabsProps) => {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <Tabs value={value} onValueChange={handleValueChange}>
      <TabsList>
        <TabsTrigger value='profile'>Profile</TabsTrigger>
        <TabsTrigger value='loans'>Borrowed List</TabsTrigger>
        <TabsTrigger value='reviews'>Reviews</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AccountTabs;
