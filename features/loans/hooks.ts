import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { loansApi } from './api';
import { AddLoanPayload } from './types/loan.types';
import { getErrorMessage } from '@/lib/api';

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
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
