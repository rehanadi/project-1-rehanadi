import { useQuery } from '@tanstack/react-query';
import { reviewsApi } from './api';
import { GetMyReviewsParams } from './types/review.types';
import { useAppDispatch } from '@/lib/hooks';
import { appendMyReviews, setMyReviews } from './stores/reviews-slice';

export const useGetMyReviews = (
  params: GetMyReviewsParams = {},
  isLoadMore = false
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['myReviews', params.page, params.limit],
    queryFn: async () => {
      const response = await reviewsApi.getMyReviews(params);

      if (isLoadMore) {
        dispatch(appendMyReviews(response.data));
      } else {
        dispatch(setMyReviews(response.data));
      }

      return response;
    },
    retry: 1,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};
