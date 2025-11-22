import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { loansApi } from './api';
import { AddLoanPayload } from './types/loan.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import { setMyLoans } from './stores/loans-slice';

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

export const useGetMyLoans = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['myLoans'],
    queryFn: async () => {
      const response = await loansApi.getMyLoans();
      dispatch(setMyLoans(response.data.loans));
      return response;
    },
    retry: 1,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};
