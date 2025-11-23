import { http } from '@/lib/api';
import {
  AddLoanPayload,
  AddLoanResponse,
  GetMyLoansParams,
  GetMyLoansResponse,
} from './types/loan.types';

export const loansApi = {
  addLoan: async (payload: AddLoanPayload): Promise<AddLoanResponse> => {
    return http.post<AddLoanResponse>('/api/loans', payload);
  },

  getMyLoans: async (
    params: GetMyLoansParams = {}
  ): Promise<GetMyLoansResponse> => {
    const { page = 1, limit = 10, status } = params;
    const statusParam = status ? `&status=${status}` : '';
    return http.get<GetMyLoansResponse>(
      `/api/me/loans?page=${page}&limit=${limit}${statusParam}`
    );
  },
};
