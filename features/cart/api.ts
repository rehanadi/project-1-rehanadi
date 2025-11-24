import { http } from '@/lib/api';
import { AddCartPayload, AddCartResponse } from './types/cart.types';

export const cartApi = {
  addCart: async (payload: AddCartPayload): Promise<AddCartResponse> => {
    return http.post<AddCartResponse>('/api/cart/items', payload);
  },
};
