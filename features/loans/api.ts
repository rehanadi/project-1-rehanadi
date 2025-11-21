import { http } from '@/lib/api';
import { AddLoanPayload, AddLoanResponse } from './types/loan.types';

export const loansApi = {
  addLoan: async (payload: AddLoanPayload): Promise<AddLoanResponse> => {
    return http.post<AddLoanResponse>('/api/loans', payload);
  },
};
