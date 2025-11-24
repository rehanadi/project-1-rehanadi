import ReviewItemCard from '@/features/reviews/components/review-item-card';
import ReviewItemSkeleton from '@/features/reviews/components/review-item-skeleton';
import { Button } from '@/components/ui/button';
import { MyReview } from '@/features/reviews/types/review.types';
import { useMemo } from 'react';

interface ReviewListProps {
  reviews: MyReview[];
  searchQuery: string;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
  isLoading: boolean;
  onLoadMore: () => void;
}

const ReviewList = ({
  reviews,
  searchQuery,
  pagination,
  isLoading,
  onLoadMore,
}: ReviewListProps) => {
  const filteredReviews = useMemo(() => {
    if (!searchQuery) return reviews;

    return reviews.filter(
      (review) =>
        review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
        review.book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [reviews, searchQuery]);

  if (isLoading && reviews.length === 0) {
    return (
      <div className='flex flex-col gap-4 md:gap-6'>
        {Array.from({ length: 3 }).map((_, index) => (
          <ReviewItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (filteredReviews.length === 0) {
    return (
      <div className='text-center text-neutral-600'>
        {searchQuery ? 'No reviews found.' : 'You have no reviews yet.'}
      </div>
    );
  }

  const showLoadMore = pagination && reviews.length < pagination.total;

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      {filteredReviews.map((review) => (
        <ReviewItemCard key={review.id} review={review} />
      ))}

      {isLoading && reviews.length > 0 && (
        <div className='text-center'>Loading...</div>
      )}

      {showLoadMore && !isLoading && (
        <Button
          className='w-37.5 self-center md:w-50'
          variant='outline'
          onClick={onLoadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
};

export default ReviewList;
