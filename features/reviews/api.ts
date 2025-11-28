import { http } from '@/lib/api';
import {
  GetMyReviewsParams,
  GetMyReviewsResponse,
  AddReviewPayload,
  AddReviewResponse,
} from './types/review.types';
import {
  API_ME_REVIEWS_URL,
  API_REVIEWS_URL,
} from '../shared/constants/api-url';

export const reviewsApi = {
  getMyReviews: async (
    params: GetMyReviewsParams = {}
  ): Promise<GetMyReviewsResponse> => {
    const { page = 1, limit = 10 } = params;
    return http.get<GetMyReviewsResponse>(
      `${API_ME_REVIEWS_URL}?page=${page}&limit=${limit}`
    );
  },

  addReview: async (payload: AddReviewPayload): Promise<AddReviewResponse> => {
    return http.post<AddReviewResponse>(API_REVIEWS_URL, payload);
  },
};
