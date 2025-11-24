'use client';

import { Fragment } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import CartItemCheckbox from './cart-item-checkbox';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  selectAllItems,
  clearSelectedItems,
} from '@/features/cart/stores/cart-slice';
import { useGetMyCart } from '@/features/cart/hooks';

const CartList = () => {
  const dispatch = useAppDispatch();
  const { items, selectedItems } = useAppSelector((state) => state.cart);
  const { isLoading } = useGetMyCart();

  const allSelected = items.length > 0 && selectedItems.length === items.length;

  const handleSelectAll = () => {
    if (allSelected) {
      dispatch(clearSelectedItems());
    } else {
      dispatch(selectAllItems());
    }
  };

  if (isLoading) {
    return (
      <div className='flex flex-1 flex-col gap-4 md:gap-6'>
        <Skeleton className='h-6 w-32' />
        {Array.from({ length: 3 }).map((_, index) => (
          <Fragment key={index}>
            <Skeleton className='h-32 w-full' />
            {index !== 2 && <Separator />}
          </Fragment>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className='flex flex-1 flex-col items-center justify-center gap-4 py-12'>
        <p className='text-neutral-600'>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className='flex flex-1 flex-col gap-4 md:gap-6'>
      <div className='flex-start gap-4'>
        <Checkbox
          id='all'
          checked={allSelected}
          onCheckedChange={handleSelectAll}
        />
        <Label htmlFor='all' className='text-md font-semibold'>
          Select All
        </Label>
      </div>

      {items.map((item, index) => (
        <Fragment key={item.id}>
          <CartItemCheckbox item={item} />
          {index !== items.length - 1 && <Separator />}
        </Fragment>
      ))}
    </div>
  );
};

export default CartList;
