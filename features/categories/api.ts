import { http } from '@/lib/api';
import { GetCategoriesResponse } from './types/category.types';

export const categoriesApi = {
  getCategories: async (): Promise<GetCategoriesResponse> => {
    return http.get<GetCategoriesResponse>('/api/categories');
  },
};
