import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { loansApi } from './api';
import { AddLoanPayload, GetMyLoansParams } from './types/loan.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import { appendMyLoans, setMyLoans } from './stores/loans-slice';
import { CACHE_DURATION } from '../shared/constants/duration';

export const useAddLoan = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddLoanPayload) => loansApi.addLoan(payload),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['book', variables.bookId] });
      queryClient.invalidateQueries({ queryKey: ['relatedBooks'] });
      queryClient.invalidateQueries({ queryKey: ['catalogBooks'] });
      queryClient.invalidateQueries({ queryKey: ['books'] });
      queryClient.invalidateQueries({ queryKey: ['recommendedBooks'] });
      queryClient.invalidateQueries({ queryKey: ['myLoans'] });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useGetMyLoans = (
  params: GetMyLoansParams = {},
  isLoadMore = false
) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['myLoans', params.page, params.limit, params.status],
    queryFn: async () => {
      const response = await loansApi.getMyLoans(params);

      if (isLoadMore) {
        dispatch(appendMyLoans(response.data));
      } else {
        dispatch(setMyLoans(response.data));
      }

      return response;
    },
    retry: 1,
    staleTime: CACHE_DURATION,
    gcTime: CACHE_DURATION,
  });
};
