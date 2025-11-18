import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Stars from '@/components/ui/stars';
import { Review } from '../types/review.type';
import { cn } from '@/lib/utils';

const ReviewCard = ({
  name,
  image,
  date,
  rating,
  comment,
  className,
}: Review & { className?: string }) => {
  return (
    <div
      className={cn(
        'shadow-light flex flex-col gap-4 rounded-2xl bg-white p-4',
        className
      )}
    >
      <div className='flex-start gap-3'>
        <Avatar className='size-14.5 md:size-16'>
          <AvatarImage src={image} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>

        <div>
          <h4 className='text-sm-bold md:text-lg-bold'>{name}</h4>
          <p className='text-sm-medium md:text-md-medium'>{date}</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <Stars rating={rating} />
        <p className='text-sm-semibold md:text-md-semibold'>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
