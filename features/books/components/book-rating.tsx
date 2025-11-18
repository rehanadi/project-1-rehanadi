import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

interface BookRatingProps {
  rating: number | string;
  className?: string;
  textClassName?: string;
}

const BookRating = ({ rating, className, textClassName }: BookRatingProps) => {
  return (
    <div className={cn('flex-start gap-0.5', className)}>
      <Icon
        icon='material-symbols:star-rounded'
        className='size-6 text-yellow-500'
      />
      <span className={cn('text-sm-semibold text-neutral-900', textClassName)}>
        {rating}
      </span>
    </div>
  );
};

export default BookRating;
