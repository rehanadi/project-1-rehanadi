import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AccountTabsProps {
  value: 'profile' | 'loans' | 'reviews';
}

const AccountTabs = ({ value }: AccountTabsProps) => {
  return (
    <Tabs defaultValue={value}>
      <TabsList>
        <TabsTrigger value='profile'>Profile</TabsTrigger>
        <TabsTrigger value='loans'>Borrowed List</TabsTrigger>
        <TabsTrigger value='reviews'>Reviews</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AccountTabs;
