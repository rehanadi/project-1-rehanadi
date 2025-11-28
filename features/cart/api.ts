import { http } from '@/lib/api';
import {
  AddCartPayload,
  AddCartResponse,
  GetMyCartResponse,
  RemoveCartItemResponse,
} from './types/cart.types';
import { API_CART_URL } from '../shared/constants/api-url';

export const cartApi = {
  getMyCart: async (): Promise<GetMyCartResponse> => {
    return http.get<GetMyCartResponse>(API_CART_URL);
  },

  addCart: async (payload: AddCartPayload): Promise<AddCartResponse> => {
    return http.post<AddCartResponse>(`${API_CART_URL}/items`, payload);
  },

  removeCartItem: async (itemId: number): Promise<RemoveCartItemResponse> => {
    return http.delete<RemoveCartItemResponse>(
      `${API_CART_URL}/items/${itemId}`
    );
  },
};
