import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { userData } from '@/features/users/constants/user-data';
import { cn } from '@/lib/utils';

interface UserTableProps {
  className?: string;
}

const UserTable = ({ className }: UserTableProps) => {
  return (
    <div className={cn(className)}>
      <Table>
        <TableHeader>
          <TableRow className='text-sm-bold border-b-0'>
            <TableHead className='w-11'>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Nomor Handphone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
