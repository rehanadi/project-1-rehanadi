import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorsState, AuthorItem } from '../types/author.types';

const initialState: AuthorsState = {
  authors: [],
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
  },
});

export const { setAuthors, clearAuthors } = authorsSlice.actions;
export default authorsSlice.reducer;
