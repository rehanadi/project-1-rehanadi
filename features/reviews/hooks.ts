import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { reviewsApi } from './api';
import { GetMyReviewsParams, AddReviewPayload } from './types/review.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import { appendMyReviews, setMyReviews } from './stores/reviews-slice';
import { CACHE_DURATION } from '../shared/constants/duration';

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
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useAddReview = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddReviewPayload) => reviewsApi.addReview(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myReviews'] });
      queryClient.invalidateQueries({ queryKey: ['book'] });
      toast.success('Review submitted successfully!');
      router.push('/reviews');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
