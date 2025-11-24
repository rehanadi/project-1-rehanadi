'use client';

import { useRouter } from 'next/navigation';
import Breadcrumbs from './breadcrumbs';
import BookInfo from '@/features/books/components/book-info';
import { BookDetail } from '@/features/books/types/book.types';
import { useAddLoan } from '@/features/loans/hooks';
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

  const { mutate: borrowBook, isPending } = useAddLoan();

  const handleBorrow = () => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    dispatch(
      setCurrentBook({
        ...book,
        availableCopies: book.availableCopies - 1,
      })
    );

    borrowBook(
      { bookId: book.id, days: 7 },
      {
        onSuccess: (data) => {
          onBorrowSuccess(data.data.loan.dueAt);
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
      <BookInfo book={book} onBorrow={handleBorrow} isBorrowing={isPending} />
    </div>
  );
};

export default Details;
