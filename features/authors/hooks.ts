import { useQuery } from '@tanstack/react-query';
import { authorsApi } from './api';
import { useAppDispatch } from '@/lib/hooks';
import {
  setAuthors,
  setAuthorBooks,
  setCurrentAuthor,
} from './stores/authors-slice';

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

export const useGetAuthorBooks = (
  authorId: number,
  enabled: boolean = true
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['authorBooks', authorId],
    queryFn: async () => {
      const response = await authorsApi.getAuthorBooks(authorId);
      dispatch(
        setAuthorBooks({
          authorId,
          books: response.data.books,
        })
      );
      dispatch(setCurrentAuthor(response.data.author));
      return response;
    },
    enabled: enabled && authorId > 0,
    retry: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
