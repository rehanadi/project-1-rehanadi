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

    const existingItem = items.find((item) => item.bookId === book.id);

    if (existingItem) {
      if (!existingItem.authorName || !existingItem.categoryName) {
        dispatch(
          updateCartItemDetails({
            bookId: book.id,
            authorName: book.Author.name,
            categoryName: book.Category.name,
          })
        );
      }

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

      addCartForBorrow(
        { bookId: book.id, qty: 1 },
        {
          onSuccess: (data) => {
            dispatch(
              updateCartItemDetails({
                bookId: book.id,
                authorName: book.Author.name,
                categoryName: book.Category.name,
              })
            );

            dispatch(clearSelectedItems());
            dispatch(toggleSelectItem(data.data.id));
            router.push('/checkout');
          },
          onError: () => {
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
          dispatch(
            updateCartItemDetails({
              bookId: book.id,
              authorName: book.Author.name,
              categoryName: book.Category.name,
            })
          );
        },
        onError: () => {
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
