import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../types/cart.types';

const initialState: CartState = {
  cartId: null,
  items: [],
  grandTotal: 0,
  selectedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (
      state,
      action: PayloadAction<{
        cartId: number;
        items: CartItem[];
        grandTotal: number;
      }>
    ) => {
      state.cartId = action.payload.cartId;
      state.items = action.payload.items;
      state.grandTotal = action.payload.grandTotal;
    },
    updateCartItemDetails: (
      state,
      action: PayloadAction<{
        bookId: number;
        authorName: string;
        categoryName: string;
      }>
    ) => {
      const item = state.items.find(
        (item) => item.bookId === action.payload.bookId
      );
      if (item) {
        item.authorName = action.payload.authorName;
        item.categoryName = action.payload.categoryName;
      }
    },
    toggleSelectItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.selectedItems.indexOf(itemId);

      if (index > -1) {
        state.selectedItems.splice(index, 1);
      } else {
        state.selectedItems.push(itemId);
      }
    },
    selectAllItems: (state) => {
      state.selectedItems = state.items.map((item) => item.id);
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
    clearCart: (state) => {
      state.cartId = null;
      state.items = [];
      state.grandTotal = 0;
      state.selectedItems = [];
    },
  },
});

export const {
  setCart,
  updateCartItemDetails,
  toggleSelectItem,
  selectAllItems,
  clearSelectedItems,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
