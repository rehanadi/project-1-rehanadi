import { http } from '@/lib/api';
import {
  AddCartPayload,
  AddCartResponse,
  GetMyCartResponse,
  RemoveCartItemResponse,
} from './types/cart.types';

export const cartApi = {
  getMyCart: async (): Promise<GetMyCartResponse> => {
    return http.get<GetMyCartResponse>('/api/cart');
  },

  addCart: async (payload: AddCartPayload): Promise<AddCartResponse> => {
    return http.post<AddCartResponse>('/api/cart/items', payload);
  },

  removeCartItem: async (itemId: number): Promise<RemoveCartItemResponse> => {
    return http.delete<RemoveCartItemResponse>(`/api/cart/items/${itemId}`);
  },
};
