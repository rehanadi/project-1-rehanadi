import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { booksApi } from './api';
import {
  GetBooksParams,
  GetRecommendedBooksParams,
  AddBookPayload,
  UpdateBookPayload,
} from './types/book.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import {
  appendBooks,
  setCatalogBooks,
  setBooks,
  setRecommendedBooks,
  setCurrentBook,
  setRelatedBooks,
} from './stores/books-slice';
import { CACHE_DURATION } from '../shared/constants/duration';

export const useGetBooks = (
  params: GetBooksParams = {},
  isLoadMore = false
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['books', params.page, params.limit, params.q],
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
    staleTime: 0,
    gcTime: CACHE_DURATION,
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
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useGetCatalogBooks = (params: GetBooksParams = {}) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: [
      'catalogBooks',
      params.categoryId,
      params.page,
      params.limit,
      params.q,
    ],
    queryFn: async () => {
      const response = await booksApi.getBooks(params);
      dispatch(setCatalogBooks(response.data));
      return response;
    },
    retry: 1,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useGetBook = (bookId: number, enabled: boolean = true) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const response = await booksApi.getBook(bookId);
      dispatch(setCurrentBook(response.data));
      return response;
    },
    enabled: enabled && bookId > 0,
    retry: 1,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useGetRelatedBooks = (
  categoryId: number,
  enabled: boolean = true
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['relatedBooks', categoryId],
    queryFn: async () => {
      const response = await booksApi.getBooks({ categoryId, limit: 50 });
      dispatch(setRelatedBooks(response.data.books));
      return response;
    },
    enabled: enabled && categoryId > 0,
    retry: 1,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};

export const useAddBook = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddBookPayload) => booksApi.addBook(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      toast.success('Book added successfully!');
      router.push('/admin/books');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useUpdateBook = (bookId: number) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateBookPayload) =>
      booksApi.updateBook(bookId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      queryClient.invalidateQueries({ queryKey: ['book', bookId] });
      toast.success('Book updated successfully!');
      router.push('/admin/books');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookId: number) => booksApi.deleteBook(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] });
      toast.success('Book deleted successfully!');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
