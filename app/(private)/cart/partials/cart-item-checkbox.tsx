'use client';

import CartItemCard from '@/features/cart/components/cart-item-card';
import { CartItem } from '@/features/cart/types/cart.types';
import { Checkbox } from '@/components/ui/checkbox';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import {
  toggleSelectItem,
  updateCartItemDetails,
} from '@/features/cart/stores/cart-slice';
import { useGetBook } from '@/features/books/hooks';
import { useEffect } from 'react';

interface CartItemCheckboxProps {
  item: CartItem;
}

const CartItemCheckbox = ({ item }: CartItemCheckboxProps) => {
  const dispatch = useAppDispatch();
  const { selectedItems } = useAppSelector((state) => state.cart);
  const isSelected = selectedItems.includes(item.id);

  const { data: bookData, isLoading: isLoadingBookDetails } = useGetBook(
    item.bookId,
    true
  );

  useEffect(() => {
    if (bookData?.data) {
      dispatch(
        updateCartItemDetails({
          bookId: item.bookId,
          authorName: bookData.data.Author.name,
          categoryName: bookData.data.Category.name,
        })
      );
    }
  }, [bookData, dispatch, item.bookId]);

  const handleToggle = () => {
    dispatch(toggleSelectItem(item.id));
  };

  return (
    <div className='flex items-start justify-start gap-4'>
      <Checkbox
        id={item.id.toString()}
        checked={isSelected}
        onCheckedChange={handleToggle}
      />
      <CartItemCard
        title={item.book.title}
        author={item.authorName || bookData?.data.Author.name || ''}
        category={item.categoryName || bookData?.data.Category.name || ''}
        image={item.book.coverImage || '/images/book-placeholder.png'}
        isLoadingDetails={isLoadingBookDetails}
      />
    </div>
  );
};

export default CartItemCheckbox;
