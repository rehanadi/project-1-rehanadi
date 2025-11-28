import { http } from '@/lib/api';
import { GetUsersParams, GetUsersResponse } from './types/user.types';
import { API_ADMIN_USERS_URL } from '../shared/constants/api-url';

export const usersApi = {
  getUsers: async (params: GetUsersParams = {}): Promise<GetUsersResponse> => {
    const { page = 1, limit = 10, q } = params;
    const searchParam = q ? `&q=${encodeURIComponent(q)}` : '';
    return http.get<GetUsersResponse>(
      `${API_ADMIN_USERS_URL}?page=${page}&limit=${limit}${searchParam}`
    );
  },
};
