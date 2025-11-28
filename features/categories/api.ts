import { http } from '@/lib/api';
import { GetCategoriesResponse } from './types/category.types';
import { API_CATEGORIES_URL } from '../shared/constants/api-url';

export const categoriesApi = {
  getCategories: async (): Promise<GetCategoriesResponse> => {
    return http.get<GetCategoriesResponse>(API_CATEGORIES_URL);
  },
};
