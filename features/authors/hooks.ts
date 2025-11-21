import { useQuery } from '@tanstack/react-query';
import { authorsApi } from './api';
import { useAppDispatch } from '@/lib/hooks';
import { setAuthors } from './stores/authors-slice';

export const useGetAuthors = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['authors'],
    queryFn: async () => {
      const response = await authorsApi.getAuthors();
      dispatch(setAuthors(response.data.authors));
      return response;
    },
    retry: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
