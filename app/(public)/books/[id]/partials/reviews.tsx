import BookRating from '@/features/books/components/book-rating';
import { Review } from '@/features/books/types/book.types';
import ReviewCard from '@/features/reviews/components/review-card';
import { Button } from '@/components/ui/button';

interface ReviewsProps {
  reviews: Review[];
  rating: number;
}

const Reviews = ({ reviews, rating }: ReviewsProps) => {
  if (reviews.length === 0) {
    return (
      <div className='flex flex-col gap-4.5'>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h2 className='text-display-xs md:text-display-lg font-bold'>
            Review
          </h2>
          <BookRating
            rating={rating}
            className='gap-1'
            textClassName='text-md-bold md:text-xl-bold'
          />
        </div>
        <div className='text-center text-neutral-600'>No reviews yet.</div>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4.5'>
      <div className='flex flex-col gap-1 md:gap-3'>
        <h2 className='text-display-xs md:text-display-lg font-bold'>Review</h2>
        <BookRating
          rating={`${rating} (${reviews.length} Ulasan)`}
          className='gap-1'
          textClassName='text-md-bold md:text-xl-bold'
        />
      </div>

      <div className='flex flex-wrap gap-x-5 gap-y-4.5'>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.user.name}
            image='/images/avatar.png'
            date={new Date(review.createdAt).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
            rating={review.star}
            comment={review.comment}
            className='flex-1 basis-[48%]'
          />
        ))}
      </div>

      {reviews.length > 4 && (
        <Button className='w-37.5 self-center md:w-50' variant='outline'>
          Load More
        </Button>
      )}
    </div>
  );
};

export default Reviews;
