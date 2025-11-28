import { http } from '@/lib/api';
import {
  GetBooksParams,
  GetBooksResponse,
  GetRecommendedBooksParams,
  GetRecommendedBooksResponse,
  GetBookResponse,
  AddBookPayload,
  AddBookResponse,
  UpdateBookPayload,
  UpdateBookResponse,
  DeleteBookResponse,
} from './types/book.types';
import { API_BOOKS_URL } from '../shared/constants/api-url';

export const booksApi = {
  getBooks: async (params: GetBooksParams = {}): Promise<GetBooksResponse> => {
    const { page = 1, limit = 10, categoryId, q } = params;
    const categoryParam = categoryId ? `&categoryId=${categoryId}` : '';
    const searchParam = q ? `&q=${encodeURIComponent(q)}` : '';
    return http.get<GetBooksResponse>(
      `${API_BOOKS_URL}?page=${page}&limit=${limit}${categoryParam}${searchParam}`
    );
  },

  getRecommendedBooks: async (
    params: GetRecommendedBooksParams = {}
  ): Promise<GetRecommendedBooksResponse> => {
    const { by = 'rating', limit = 10 } = params;
    return http.get<GetRecommendedBooksResponse>(
      `${API_BOOKS_URL}/recommend?by=${by}&limit=${limit}`
    );
  },

  getBook: async (bookId: number): Promise<GetBookResponse> => {
    return http.get<GetBookResponse>(`${API_BOOKS_URL}/${bookId}`);
  },

  addBook: async (payload: AddBookPayload): Promise<AddBookResponse> => {
    return http.post<AddBookResponse>(API_BOOKS_URL, payload);
  },

  updateBook: async (
    bookId: number,
    payload: UpdateBookPayload
  ): Promise<UpdateBookResponse> => {
    return http.put<UpdateBookResponse>(`${API_BOOKS_URL}/${bookId}`, payload);
  },

  deleteBook: async (bookId: number): Promise<DeleteBookResponse> => {
    return http.delete<DeleteBookResponse>(`${API_BOOKS_URL}/${bookId}`);
  },
};
