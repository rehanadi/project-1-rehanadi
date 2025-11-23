'use client';

import AccountTabs from '@/features/shared/components/account-tabs';
import ReviewsContainer from './partials/reviews-container';
import ReviewsTitle from './partials/reviews-title';
import SearchBox from './partials/search-box';
import ReviewList from './partials/review-list';
import { useState, useEffect } from 'react';
import { useGetMyReviews } from '@/features/reviews/hooks';
import { useAppSelector } from '@/lib/hooks';

const ReviewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const { myReviews, pagination } = useAppSelector((state) => state.reviews);

  const { isLoading, refetch } = useGetMyReviews({ page, limit: 10 }, page > 1);

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <ReviewsContainer>
      <AccountTabs value='reviews' />
      <ReviewsTitle />
      <SearchBox value={searchQuery} onChange={setSearchQuery} />
      <ReviewList
        reviews={myReviews}
        searchQuery={searchQuery}
        pagination={pagination}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
      />
    </ReviewsContainer>
  );
};

export default ReviewsPage;
