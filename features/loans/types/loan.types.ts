import { Book } from '@/features/books/types/book.types';

export interface LoanItem {
  id: string;
  status: 'Active' | 'Returned' | 'Overdue';
  book: Pick<Book, 'title' | 'author' | 'image'>;
  borrowedDate: string;
  dueDate: string;
  durationDays: number;
}

export interface AddLoanPayload {
  bookId: number;
  days: number;
}

export interface AddLoanResponse {
  success: true;
  message: string;
  data: {
    loan: {
      id: number;
      userId: number;
      bookId: number;
      status: string;
      borrowedAt: string;
      dueAt: string;
      returnedAt: string | null;
    };
  };
}

export interface MyLoan {
  id: number;
  userId: number;
  bookId: number;
  status: 'BORROWED' | 'RETURNED' | 'OVERDUE';
  borrowedAt: string;
  dueAt: string;
  returnedAt: string | null;
  book: {
    id: number;
    title: string;
    coverImage: string | null;
  };
}

export interface GetMyLoansResponse {
  success: true;
  message: string;
  data: {
    loans: MyLoan[];
  };
}

export interface LoansState {
  myLoans: MyLoan[];
}
