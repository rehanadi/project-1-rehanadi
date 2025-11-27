'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';

interface AdminTabsProps {
  value: 'loans' | 'users' | 'books';
}

const AdminTabs = ({ value }: AdminTabsProps) => {
  const router = useRouter();

  const handleValueChange = (value: string) => {
    router.push(`/admin/${value}`);
  };

  return (
    <Tabs value={value} onValueChange={handleValueChange}>
      <TabsList>
        <TabsTrigger value='loans'>Borrowed List</TabsTrigger>
        <TabsTrigger value='users'>User</TabsTrigger>
        <TabsTrigger value='books'>Book List</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AdminTabs;
