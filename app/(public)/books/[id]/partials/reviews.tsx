import BookRating from '@/features/books/components/book-rating';
import { reviewData } from '@/features/reviews/constants/review-data';
import ReviewCard from '@/features/reviews/components/review-card';
import { Button } from '@/components/ui/button';

const Reviews = () => {
  return (
    <div className='flex flex-col gap-4.5'>
      <div className='flex flex-col gap-1 md:gap-3'>
        <h2 className='text-display-xs md:text-display-lg font-bold'>Review</h2>
        <BookRating
          rating='4.9 (24 Ulasan)'
          className='gap-1'
          textClassName='text-md-bold md:text-xl-bold'
        />
      </div>

      <div className='flex flex-wrap gap-x-5 gap-y-4.5'>
        {reviewData.map((review, index) => (
          <ReviewCard key={index} {...review} className='flex-1 basis-[48%]' />
        ))}
      </div>

      <Button className='w-37.5 self-center md:w-50' variant='outline'>
        Load More
      </Button>
    </div>
  );
};

export default Reviews;
