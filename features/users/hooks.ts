import { useQuery } from '@tanstack/react-query';
import { usersApi } from './api';
import { GetUsersParams } from './types/user.types';
import { useAppDispatch } from '@/lib/hooks';
import { setUsers } from './stores/users-slice';
import { CACHE_DURATION } from '../shared/constants/duration';

export const useGetUsers = (params: GetUsersParams = {}) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['users', params.page, params.limit, params.q],
    queryFn: async () => {
      const response = await usersApi.getUsers(params);
      dispatch(setUsers(response.data));
      return response;
    },
    retry: 1,
    staleTime: 0,
    gcTime: CACHE_DURATION,
  });
};
