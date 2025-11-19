import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const Ratings = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className='flex-start'>
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          icon='material-symbols:star-rounded'
          className={cn(
            'size-6',
            index < rating ? 'text-yellow-500' : 'text-neutral-300'
          )}
        />
      ))}
    </div>
  );
};

export default Ratings;
