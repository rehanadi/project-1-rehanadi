'use client';

import { useRouter } from 'next/navigation';
import Breadcrumbs from './breadcrumbs';
import BookInfo from '@/features/books/components/book-info';
import { BookDetail } from '@/features/books/types/book.types';
import { useAddLoan } from '@/features/loans/hooks';
import { useAddCart } from '@/features/cart/hooks';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setCurrentBook } from '@/features/books/stores/books-slice';

interface DetailsProps {
  book: BookDetail;
  onBorrowSuccess: (dueDate: string) => void;
}

const Details = ({ book, onBorrowSuccess }: DetailsProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const { mutate: borrowBook, isPending: isBorrowing } = useAddLoan();
  const { mutate: addCart, isPending: isAddingCart } = useAddCart();

  const handleBorrow = () => {
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

    borrowBook(
      { bookId: book.id, days: 7 },
      {
        onSuccess: (data) => {
          onBorrowSuccess(data.data.loan.dueAt);
        },
        onError: () => {
          // Rollback on error
          dispatch(setCurrentBook(book));
        },
      }
    );
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
