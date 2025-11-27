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

export const booksApi = {
  getBooks: async (params: GetBooksParams = {}): Promise<GetBooksResponse> => {
    const { page = 1, limit = 10, categoryId, q } = params;
    const categoryParam = categoryId ? `&categoryId=${categoryId}` : '';
    const searchParam = q ? `&q=${encodeURIComponent(q)}` : '';
    return http.get<GetBooksResponse>(
      `/api/books?page=${page}&limit=${limit}${categoryParam}${searchParam}`
    );
  },

  getRecommendedBooks: async (
    params: GetRecommendedBooksParams = {}
  ): Promise<GetRecommendedBooksResponse> => {
    const { by = 'rating', limit = 10 } = params;
    return http.get<GetRecommendedBooksResponse>(
      `/api/books/recommend?by=${by}&limit=${limit}`
    );
  },

  getBook: async (bookId: number): Promise<GetBookResponse> => {
    return http.get<GetBookResponse>(`/api/books/${bookId}`);
  },

  addBook: async (payload: AddBookPayload): Promise<AddBookResponse> => {
    return http.post<AddBookResponse>('/api/books', payload);
  },

  updateBook: async (
    bookId: number,
    payload: UpdateBookPayload
  ): Promise<UpdateBookResponse> => {
    return http.put<UpdateBookResponse>(`/api/books/${bookId}`, payload);
  },

  deleteBook: async (bookId: number): Promise<DeleteBookResponse> => {
    return http.delete<DeleteBookResponse>(`/api/books/${bookId}`);
  },
};
