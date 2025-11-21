import { http } from '@/lib/api';
import {
  GetBooksParams,
  GetBooksResponse,
  GetRecommendedBooksParams,
  GetRecommendedBooksResponse,
} from './types/book.types';

export const booksApi = {
  getBooks: async (params: GetBooksParams = {}): Promise<GetBooksResponse> => {
    const { page = 1, limit = 10 } = params;
    return http.get<GetBooksResponse>(`/api/books?page=${page}&limit=${limit}`);
  },

  getRecommendedBooks: async (
    params: GetRecommendedBooksParams = {}
  ): Promise<GetRecommendedBooksResponse> => {
    const { by = 'rating', limit = 10 } = params;
    return http.get<GetRecommendedBooksResponse>(
      `/api/books/recommend?by=${by}&limit=${limit}`
    );
  },
};
