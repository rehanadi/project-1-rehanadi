import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewsState, GetMyReviewsResponse } from '../types/review.types';

const initialState: ReviewsState = {
  myReviews: [],
  pagination: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setMyReviews: (
      state,
      action: PayloadAction<GetMyReviewsResponse['data']>
    ) => {
      state.myReviews = action.payload.reviews;
      state.pagination = action.payload.pagination;
    },
    appendMyReviews: (
      state,
      action: PayloadAction<GetMyReviewsResponse['data']>
    ) => {
      state.myReviews = [...state.myReviews, ...action.payload.reviews];
      state.pagination = action.payload.pagination;
    },
    clearMyReviews: (state) => {
      state.myReviews = [];
      state.pagination = null;
    },
  },
});

export const { setMyReviews, appendMyReviews, clearMyReviews } =
  reviewsSlice.actions;
export default reviewsSlice.reducer;
