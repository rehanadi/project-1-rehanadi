import { useQuery } from '@tanstack/react-query';
import { booksApi } from './api';
import { GetBooksParams, GetRecommendedBooksParams } from './types/book.types';
import { useAppDispatch } from '@/lib/hooks';
import {
  appendBooks,
  setCatalogBooks,
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

export const useGetCatalogBooks = (params: GetBooksParams = {}) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['catalogBooks', params.categoryId, params.page, params.limit],
    queryFn: async () => {
      const response = await booksApi.getBooks(params);
      dispatch(setCatalogBooks(response.data));
      return response;
    },
    retry: 1,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};
