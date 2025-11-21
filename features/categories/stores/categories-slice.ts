import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesState, CategoryItem } from '../types/category.types';

const initialState: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryItem[]>) => {
      state.categories = action.payload;
    },
    clearCategories: (state) => {
      state.categories = [];
    },
  },
});

export const { setCategories, clearCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
