import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorsState, Author, AuthorBook } from '../types/author.types';

const initialState: AuthorsState = {
  authors: [],
  currentAuthor: null,
  authorBooks: {},
};

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    setAuthors: (state, action: PayloadAction<Author[]>) => {
      state.authors = action.payload;
    },
    setAuthorBooks: (
      state,
      action: PayloadAction<{ authorId: number; books: AuthorBook[] }>
    ) => {
      state.authorBooks[action.payload.authorId] = action.payload.books;
    },
    setCurrentAuthor: (state, action: PayloadAction<Author>) => {
      state.currentAuthor = action.payload;
    },
    clearAuthors: (state) => {
      state.authors = [];
    },
    clearAuthorBooks: (state) => {
      state.currentAuthor = null;
      state.authorBooks = {};
    },
  },
});

export const {
  setAuthors,
  setAuthorBooks,
  setCurrentAuthor,
  clearAuthors,
  clearAuthorBooks,
} = authorsSlice.actions;
export default authorsSlice.reducer;
