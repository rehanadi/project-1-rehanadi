import { LoanItem } from '../types/loan.types';

export const loanData: LoanItem[] = [
  {
    id: '1',
    status: 'Active',
    book: {
      title: 'Book Name',
      author: 'Author Name',
      image: '/images/books/yeti.png',
    },
    borrowedDate: '29 Aug 2025',
    dueDate: '31 August 2025',
    durationDays: 3,
  },
  {
    id: '2',
    status: 'Returned',
    book: {
      title: 'Book Name',
      author: 'Author Name',
      image: '/images/books/yeti.png',
    },
    borrowedDate: '29 Aug 2025',
    dueDate: '31 August 2025',
    durationDays: 3,
  },
  {
    id: '3',
    status: 'Overdue',
    book: {
      title: 'Book Name',
      author: 'Author Name',
      image: '/images/books/yeti.png',
    },
    borrowedDate: '29 Aug 2025',
    dueDate: '31 August 2025',
    durationDays: 3,
  },
];
