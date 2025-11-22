import { http } from '@/lib/api';
import {
  AddLoanPayload,
  AddLoanResponse,
  GetMyLoansResponse,
} from './types/loan.types';

export const loansApi = {
  addLoan: async (payload: AddLoanPayload): Promise<AddLoanResponse> => {
    return http.post<AddLoanResponse>('/api/loans', payload);
  },

  getMyLoans: async (): Promise<GetMyLoansResponse> => {
    return http.get<GetMyLoansResponse>('/api/loans/my');
  },
};
