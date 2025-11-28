import { useQuery } from '@tanstack/react-query';
import { categoriesApi } from './api';
import { useAppDispatch } from '@/lib/hooks';
import { setCategories } from './stores/categories-slice';
import { CACHE_DURATION } from '../shared/constants/duration';

export const useGetCategories = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await categoriesApi.getCategories();
      dispatch(setCategories(response.data.categories));
      return response;
    },
    retry: 1,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};
