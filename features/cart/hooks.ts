import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { cartApi } from './api';
import { AddCartPayload } from './types/cart.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCart, removeCartItemFromState } from './stores/cart-slice';

export const useGetMyCart = (enabled: boolean = true) => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['myCart'],
    queryFn: async () => {
      const response = await cartApi.getMyCart();
      dispatch(setCart(response.data));
      return response;
    },
    retry: 1,
    staleTime: 0, // Always consider data stale
    gcTime: 1000 * 60,
    enabled,
  });
};

export const useAddCart = (shouldRedirect: boolean = true) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (payload: AddCartPayload) => cartApi.addCart(payload),
    onSuccess: async () => {
      // Refetch cart to get updated data
      const response = await cartApi.getMyCart();
      dispatch(setCart(response.data));

      queryClient.invalidateQueries({ queryKey: ['myCart'] });
      queryClient.invalidateQueries({ queryKey: ['book'] });
      toast.success('Book added to cart!');

      if (shouldRedirect) {
        router.push('/cart');
      }
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};

export const useRemoveCartItem = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (itemId: number) => cartApi.removeCartItem(itemId),
    onSuccess: (_, itemId) => {
      dispatch(removeCartItemFromState(itemId));
      queryClient.invalidateQueries({ queryKey: ['myCart'] });
      queryClient.invalidateQueries({ queryKey: ['book'] });
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
