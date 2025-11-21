import { http } from '@/lib/api';
import {
  GetAuthorsResponse,
  GetAuthorBooksResponse,
} from './types/author.types';

export const authorsApi = {
  getAuthors: async (): Promise<GetAuthorsResponse> => {
    return http.get<GetAuthorsResponse>('/api/authors');
  },

  getAuthorBooks: async (authorId: number): Promise<GetAuthorBooksResponse> => {
    return http.get<GetAuthorBooksResponse>(`/api/authors/${authorId}/books`);
  },
};
