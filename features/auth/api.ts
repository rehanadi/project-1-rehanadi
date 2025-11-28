import { http } from '@/lib/api';
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
  GetMyProfileResponse,
} from './types/auth.types';
import { API_AUTH_URL, API_ME_URL } from '../shared/constants/api-url';

export const authApi = {
  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    return http.post<RegisterResponse>(`${API_AUTH_URL}/register`, payload);
  },

  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    return http.post<LoginResponse>(`${API_AUTH_URL}/login`, payload);
  },

  getMyProfile: async (): Promise<GetMyProfileResponse> => {
    return http.get<GetMyProfileResponse>(API_ME_URL);
  },
};
