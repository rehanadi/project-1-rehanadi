import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/stores/auth-slice';
import booksReducer from '@/features/books/stores/books-slice';
import categoriesReducer from '@/features/categories/stores/categories-slice';
import authorsReducer from '@/features/authors/stores/authors-slice';
import loansReducer from '@/features/loans/stores/loans-slice';
import reviewsReducer from '@/features/reviews/stores/reviews-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    categories: categoriesReducer,
    authors: authorsReducer,
    loans: loansReducer,
    reviews: reviewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
