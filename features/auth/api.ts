import { http } from '@/lib/api';
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from './types/auth.types';

export const authApi = {
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    return http.post<RegisterResponse>('/api/auth/register', payload);
  },

  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    return http.post<LoginResponse>('/api/auth/login', payload);
  },
};
