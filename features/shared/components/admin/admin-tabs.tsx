import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AdminTabsProps {
  value: 'loans' | 'users' | 'books';
}

const AdminTabs = ({ value }: AdminTabsProps) => {
  return (
    <Tabs defaultValue={value}>
      <TabsList>
        <TabsTrigger value='loans'>Borrowed List</TabsTrigger>
        <TabsTrigger value='users'>User</TabsTrigger>
        <TabsTrigger value='books'>Book List</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AdminTabs;
