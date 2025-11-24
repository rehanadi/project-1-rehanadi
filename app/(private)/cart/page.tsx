'use client';

import { useEffect } from 'react';
import CartContainer from './partials/cart-container';
import CartSection from './partials/cart-section';
import { useGetMyCart } from '@/features/cart/hooks';

const CartPage = () => {
  const { refetch } = useGetMyCart();

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <CartContainer>
      <CartSection />
    </CartContainer>
  );
};

export default CartPage;
