import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookItem, BooksState, GetBooksResponse } from '../types/book.types';

const initialState: BooksState = {
  books: [],
  pagination: null,
  recommendedBooks: [],
  catalogBooks: [],
  catalogPagination: null,
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
    setCatalogBooks: (
      state,
      action: PayloadAction<GetBooksResponse['data']>
    ) => {
      state.catalogBooks = action.payload.books;
      state.catalogPagination = action.payload.pagination;
    },
    clearCatalogBooks: (state) => {
      state.catalogBooks = [];
      state.catalogPagination = null;
    },
  },
});

export const {
  setBooks,
  appendBooks,
  clearBooks,
  setRecommendedBooks,
  clearRecommendedBooks,
  setCatalogBooks,
  clearCatalogBooks,
} = booksSlice.actions;
export default booksSlice.reducer;
