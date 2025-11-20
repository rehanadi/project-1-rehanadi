import { userData } from '@/features/users/constants/user-data';
import UserCard from './user-card';
import { cn } from '@/lib/utils';

interface UserCardsProps {
  className?: string;
}

const UserCards = ({ className }: UserCardsProps) => {
  return (
    <div className={cn('flex flex-col gap-3.75', className)}>
      {userData.map((user, index) => (
        <UserCard key={index} no={index + 1} {...user} />
      ))}
    </div>
  );
};

export default UserCards;
