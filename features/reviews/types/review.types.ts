export interface Review {
  name: string;
  image: string;
  date: string;
  rating: number;
  comment: string;
}

export interface MyReview {
  id: number;
  star: number;
  comment: string;
  userId: number;
  bookId: number;
  createdAt: string;
  Book: {
    id: number;
    title: string;
    coverImage: string | null;
  };
}

export interface GetMyReviewsParams {
  page?: number;
  limit?: number;
}

export interface GetMyReviewsResponse {
  success: true;
  message: string;
  data: {
    reviews: MyReview[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface AddReviewPayload {
  bookId: number;
  star: number;
  comment: string;
}

export interface AddReviewResponse {
  success: true;
  message: string;
  data: {
    review: {
      id: number;
      star: number;
      comment: string;
      userId: number;
      bookId: number;
      createdAt: string;
    };
    bookStats: {
      rating: number;
      reviewCount: number;
    };
  };
}

export interface ReviewsState {
  myReviews: MyReview[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
}
