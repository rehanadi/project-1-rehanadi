import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { cartApi } from './api';
import { AddCartPayload } from './types/cart.types';
import { getErrorMessage } from '@/lib/api';

export const useAddCart = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: AddCartPayload) => cartApi.addCart(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      queryClient.invalidateQueries({ queryKey: ['book'] });
      toast.success('Book added to cart!');
      router.push('/cart');
    },
    onError: (error) => {
      toast.error(getErrorMessage(error));
    },
  });
};
