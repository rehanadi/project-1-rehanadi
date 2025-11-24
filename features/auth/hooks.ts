import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { authApi } from './api';
import { LoginPayload, RegisterPayload } from './types/auth.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import { setCredentials, setUser } from './stores/auth-slice';

export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: RegisterPayload) => authApi.register(payload),
    onSuccess: () => {
      toast.success('Registration successful!');
      router.push('/login');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) => authApi.login(payload),
    onSuccess: (data) => {
      dispatch(
        setCredentials({
          token: data.data.token,
          user: data.data.user,
        })
      );

      queryClient.invalidateQueries({ queryKey: ['me'] });
      queryClient.invalidateQueries({ queryKey: ['cart'] });

      toast.success('Login successful!');

      if (data.data.user.role === 'ADMIN') {
        router.push('/admin/users');
      } else {
        router.push('/');
      }
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useGetMyProfile = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['myProfile'],
    queryFn: async () => {
      const response = await authApi.getMyProfile();
      dispatch(setUser(response.data.profile));
      return response;
    },
    retry: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });
};
