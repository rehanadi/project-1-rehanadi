import { http } from '@/lib/api';
import {
  GetMyReviewsParams,
  GetMyReviewsResponse,
  AddReviewPayload,
  AddReviewResponse,
} from './types/review.types';

export const reviewsApi = {
  getMyReviews: async (
    params: GetMyReviewsParams = {}
  ): Promise<GetMyReviewsResponse> => {
    const { page = 1, limit = 10 } = params;
    return http.get<GetMyReviewsResponse>(
      `/api/me/reviews?page=${page}&limit=${limit}`
    );
  },

  addReview: async (payload: AddReviewPayload): Promise<AddReviewResponse> => {
    return http.post<AddReviewResponse>('/api/reviews', payload);
  },
};
