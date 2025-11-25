import { http } from '@/lib/api';
import { GetUsersParams, GetUsersResponse } from './types/user.types';

export const usersApi = {
  getUsers: async (params: GetUsersParams = {}): Promise<GetUsersResponse> => {
    const { page = 1, limit = 10, q } = params;
    const searchParam = q ? `&q=${encodeURIComponent(q)}` : '';
    return http.get<GetUsersResponse>(
      `/api/admin/users?page=${page}&limit=${limit}${searchParam}`
    );
  },
};
