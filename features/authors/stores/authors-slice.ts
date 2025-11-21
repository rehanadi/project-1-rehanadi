import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorsState, AuthorItem, AuthorBook } from '../types/author.types';

const initialState: AuthorsState = {
  authors: [],
  authorBooks: {},
  currentAuthor: null,
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    setAuthors: (state, action: PayloadAction<AuthorItem[]>) => {
      state.authors = action.payload;
    },
    clearAuthors: (state) => {
      state.authors = [];
    },
    setAuthorBooks: (
      state,
      action: PayloadAction<{ authorId: number; books: AuthorBook[] }>
    ) => {
      state.authorBooks[action.payload.authorId] = action.payload.books;
    },
    setCurrentAuthor: (state, action: PayloadAction<AuthorItem>) => {
      state.currentAuthor = action.payload;
    },
    clearCurrentAuthor: (state) => {
      state.currentAuthor = null;
    },
  },
});

export const {
  setAuthors,
  clearAuthors,
  setAuthorBooks,
  setCurrentAuthor,
  clearCurrentAuthor,
} = authorsSlice.actions;
export default authorsSlice.reducer;
