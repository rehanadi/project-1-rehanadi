import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BooksState, BookItem, GetBooksResponse } from '../types/book.types';

const initialState: BooksState = {
  books: [],
  pagination: null,
  recommendedBooks: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<GetBooksResponse['data']>) => {
      state.books = action.payload.books;
      state.pagination = action.payload.pagination;
    },
    appendBooks: (state, action: PayloadAction<GetBooksResponse['data']>) => {
      state.books = [...state.books, ...action.payload.books];
      state.pagination = action.payload.pagination;
    },
    clearBooks: (state) => {
      state.books = [];
      state.pagination = null;
    },
    setRecommendedBooks: (state, action: PayloadAction<BookItem[]>) => {
      state.recommendedBooks = action.payload;
    },
    clearRecommendedBooks: (state) => {
      state.recommendedBooks = [];
    },
  },
});

export const {
  setBooks,
  appendBooks,
  clearBooks,
  setRecommendedBooks,
  clearRecommendedBooks,
} = booksSlice.actions;
export default booksSlice.reducer;
