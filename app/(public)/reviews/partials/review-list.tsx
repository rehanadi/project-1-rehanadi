import ReviewItemCard from '@/features/reviews/components/review-item-card';

const ReviewList = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <ReviewItemCard />
      <ReviewItemCard />
      <ReviewItemCard />
    </div>
  );
};

export default ReviewList;
