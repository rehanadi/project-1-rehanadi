import { http } from '@/lib/api';
import { GetAuthorsResponse } from './types/author.types';

export const authorsApi = {
  getAuthors: async (): Promise<GetAuthorsResponse> => {
    return http.get<GetAuthorsResponse>('/api/authors');
  },
};
