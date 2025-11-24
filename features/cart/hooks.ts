import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { cartApi } from './api';
import { AddCartPayload } from './types/cart.types';
import { getErrorMessage } from '@/lib/api';
import { useAppDispatch } from '@/lib/hooks';
import { setCart } from './stores/cart-slice';

export const useGetMyCart = () => {
  const dispatch = useAppDispatch();

  return useQuery({
    queryKey: ['myCart'],
    queryFn: async () => {
      const response = await cartApi.getMyCart();
      dispatch(setCart(response.data));
      return response;
    },
    retry: 1,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60,
  });
};

export const useAddCart = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddCartPayload) => cartApi.addCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myCart'] });
      queryClient.invalidateQueries({ queryKey: ['book'] });
      toast.success('Book added to cart!');
      router.push('/cart');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
