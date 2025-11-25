import UserCard from './user-card';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/lib/hooks';
import dayjs from 'dayjs';

interface UserCardsProps {
  className?: string;
  isLoading: boolean;
}

const UserCards = ({ className, isLoading }: UserCardsProps) => {
  const users = useAppSelector((state) => state.users.users);

  if (isLoading) {
    return (
      <div className={cn('flex flex-col gap-3.75', className)}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className='shadow-light h-40 animate-pulse rounded-xl bg-neutral-200'
          />
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className={cn('flex items-center justify-center py-8', className)}>
        <p className='text-md-medium text-neutral-600'>No users found</p>
      </div>
    );
  }

  return (
    <div className={cn('flex flex-col gap-3.75', className)}>
      {users.map((user, index) => (
        <UserCard
          key={user.id}
          no={(index + 1).toString()}
          name={user.name}
          email={user.email}
          phone={user.phoneNumber || '-'}
          createdAt={dayjs(user.createdAt).format('DD MMM YYYY')}
        />
      ))}
    </div>
  );
};

export default UserCards;
