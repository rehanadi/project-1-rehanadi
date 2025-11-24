import { http } from '@/lib/api';
import {
  AddCartPayload,
  AddCartResponse,
  GetMyCartResponse,
} from './types/cart.types';

export const cartApi = {
  getMyCart: async (): Promise<GetMyCartResponse> => {
    return http.get<GetMyCartResponse>('/api/cart');
  },

  addCart: async (payload: AddCartPayload): Promise<AddCartResponse> => {
    return http.post<AddCartResponse>('/api/cart/items', payload);
  },
};
