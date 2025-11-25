'use client';

import { useRouter } from 'next/navigation';
import Breadcrumbs from './breadcrumbs';
import BookInfo from '@/features/books/components/book-info';
import { BookDetail } from '@/features/books/types/book.types';
import { useAddCart } from '@/features/cart/hooks';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCurrentBook } from '@/features/books/stores/books-slice';
import {
  clearSelectedItems,
  toggleSelectItem,
  updateCartItemDetails,
} from '@/features/cart/stores/cart-slice';

interface DetailsProps {
  book: BookDetail;
}

const Details = ({ book }: DetailsProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const { items } = useAppSelector((state) => state.cart);

  const { mutate: addCartForBorrow, isPending: isBorrowing } =
    useAddCart(false);
  const { mutate: addCart, isPending: isAddingCart } = useAddCart(true);

  const handleBorrow = () => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Check if book already in cart
    const existingItem = items.find((item) => item.bookId === book.id);

    if (existingItem) {
      // Update author and category if not present
      if (!existingItem.authorName || !existingItem.categoryName) {
        dispatch(
          updateCartItemDetails({
            bookId: book.id,
            authorName: book.Author.name,
            categoryName: book.Category.name,
          })
        );
      }

      // Clear all selections and select only this item
      dispatch(clearSelectedItems());
      dispatch(toggleSelectItem(existingItem.id));
      router.push('/checkout');
    } else {
      // Optimistic update: decrease stock
      dispatch(
        setCurrentBook({
          ...book,
          stock: book.stock - 1,
        })
      );

      // Add to cart and redirect to checkout
      addCartForBorrow(
        { bookId: book.id, qty: 1 },
        {
          onSuccess: (data) => {
            // Redux state already updated in useAddCart hook
            // Update author and category details
            dispatch(
              updateCartItemDetails({
                bookId: book.id,
                authorName: book.Author.name,
                categoryName: book.Category.name,
              })
            );

            // Clear all selections and select only this new item
            dispatch(clearSelectedItems());
            dispatch(toggleSelectItem(data.data.id));
            router.push('/checkout');
          },
          onError: () => {
            // Rollback on error
            dispatch(setCurrentBook(book));
          },
        }
      );
    }
  };

  const handleAddCart = () => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Optimistic update: decrease stock
    dispatch(
      setCurrentBook({
        ...book,
        stock: book.stock - 1,
      })
    );

    addCart(
      { bookId: book.id, qty: 1 },
      {
        onSuccess: () => {
          // Update author and category details after add to cart
          dispatch(
            updateCartItemDetails({
              bookId: book.id,
              authorName: book.Author.name,
              categoryName: book.Category.name,
            })
          );
        },
        onError: () => {
          // Rollback on error
          dispatch(setCurrentBook(book));
        },
      }
    );
  };

  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <Breadcrumbs book={book} />
      <BookInfo
        book={book}
        onBorrow={handleBorrow}
        isBorrowing={isBorrowing}
        onAddCart={handleAddCart}
        isAddingCart={isAddingCart}
      />
    </div>
  );
};

export default Details;
