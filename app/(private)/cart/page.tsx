'use client';

import { useEffect } from 'react';
import CartContainer from './partials/cart-container';
import CartSection from './partials/cart-section';
import { useGetMyCart } from '@/features/cart/hooks';
import { useAppSelector } from '@/lib/hooks';

const CartPage = () => {
  const { items } = useAppSelector((state) => state.cart);
  const { refetch } = useGetMyCart();

  useEffect(() => {
    // Only refetch if cart is empty
    if (items.length === 0) {
      refetch();
    }
  }, [items.length, refetch]);

  return (
    <CartContainer>
      <CartSection />
    </CartContainer>
  );
};

export default CartPage;
