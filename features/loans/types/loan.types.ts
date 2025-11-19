import { Book } from '@/features/books/types/book.types';

export interface LoanItem {
  id: string;
  status: 'Active' | 'Returned' | 'Overdue';
  book: Pick<Book, 'title' | 'author' | 'image'>;
  borrowedDate: string;
  dueDate: string;
  durationDays: number;
}
