import { http } from '@/lib/api';
import {
  AddLoanPayload,
  AddLoanResponse,
  GetMyLoansParams,
  GetMyLoansResponse,
} from './types/loan.types';
import { API_LOANS_URL, API_ME_LOANS_URL } from '../shared/constants/api-url';

export const loansApi = {
  addLoan: async (payload: AddLoanPayload): Promise<AddLoanResponse> => {
    return http.post<AddLoanResponse>(API_LOANS_URL, payload);
  },

  getMyLoans: async (
    params: GetMyLoansParams = {}
  ): Promise<GetMyLoansResponse> => {
    const { page = 1, limit = 10, status } = params;
    const statusParam = status ? `&status=${status}` : '';
    return http.get<GetMyLoansResponse>(
      `${API_ME_LOANS_URL}?page=${page}&limit=${limit}${statusParam}`
    );
  },
};
