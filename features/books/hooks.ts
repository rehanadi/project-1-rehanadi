import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { booksApi } from './api';
import { GetBooksParams, GetRecommendedBooksParams } from './types/book.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import {
  appendBooks,
  setBooks,
  setRecommendedBooks,
} from './stores/books-slice';

export const useGetBooks = (
  params: GetBooksParams = {},
  isLoadMore = false
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['books', params.page, params.limit],
    queryFn: async () => {
      const response = await booksApi.getBooks(params);

      if (isLoadMore) {
        dispatch(appendBooks(response.data));
      } else {
        dispatch(setBooks(response.data));
      }

      return response;
    },
    retry: 1,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};

export const useGetRecommendedBooks = (
  params: GetRecommendedBooksParams = {}
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['recommendedBooks', params.by, params.limit],
    queryFn: async () => {
      const response = await booksApi.getRecommendedBooks(params);
      dispatch(setRecommendedBooks(response.data.books));
      return response;
    },
    retry: 1,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};
