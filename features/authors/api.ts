import { http } from '@/lib/api';
import {
  GetAuthorsResponse,
  GetAuthorBooksResponse,
} from './types/author.types';
import { API_AUTHORS_URL } from '../shared/constants/api-url';

export const authorsApi = {
  getAuthors: async (): Promise<GetAuthorsResponse> => {
    return http.get<GetAuthorsResponse>(API_AUTHORS_URL);
  },

  getAuthorBooks: async (authorId: number): Promise<GetAuthorBooksResponse> => {
    return http.get<GetAuthorBooksResponse>(
      `${API_AUTHORS_URL}/${authorId}/books`
    );
  },
};
