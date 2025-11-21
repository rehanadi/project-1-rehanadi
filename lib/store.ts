import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/stores/auth-slice';
import booksReducer from '@/features/books/stores/books-slice';
import categoriesReducer from '@/features/categories/stores/categories-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
