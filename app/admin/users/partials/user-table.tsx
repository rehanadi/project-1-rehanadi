import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/hooks';
import dayjs from 'dayjs';

interface UserTableProps {
  className?: string;
  isLoading: boolean;
}

const UserTable = ({ className, isLoading }: UserTableProps) => {
  const users = useAppSelector((state) => state.users.users);
  const pagination = useAppSelector((state) => state.users.pagination);

  const startIndex = pagination ? (pagination.page - 1) * pagination.limit : 0;

  if (isLoading) {
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
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className='h-4 w-8 animate-pulse rounded bg-neutral-200' />
                </TableCell>
                <TableCell>
                  <div className='h-4 w-32 animate-pulse rounded bg-neutral-200' />
                </TableCell>
                <TableCell>
                  <div className='h-4 w-28 animate-pulse rounded bg-neutral-200' />
                </TableCell>
                <TableCell>
                  <div className='h-4 w-40 animate-pulse rounded bg-neutral-200' />
                </TableCell>
                <TableCell>
                  <div className='h-4 w-24 animate-pulse rounded bg-neutral-200' />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className={cn(className)}>
        <div className='flex items-center justify-center py-8'>
          <p className='text-md-medium text-neutral-600'>No users found</p>
        </div>
      </div>
    );
  }

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
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.phoneNumber || '-'}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {dayjs(user.createdAt).format('DD MMM YYYY')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
