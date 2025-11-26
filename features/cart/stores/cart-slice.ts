import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../types/cart.types';

const CART_STORAGE_KEY = 'cart';

const loadCartFromStorage = (): CartState => {
  if (typeof window === 'undefined') {
    return {
      cartId: null,
      items: [],
      grandTotal: 0,
      selectedItems: [],
    };
  }

  try {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
  }

  return {
    cartId: null,
    items: [],
    grandTotal: 0,
    selectedItems: [],
  };
};

const saveCartToStorage = (state: CartState) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

const initialState: CartState = loadCartFromStorage();

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

      const validItemIds = action.payload.items.map((item) => item.id);
      state.selectedItems = state.selectedItems.filter((id) =>
        validItemIds.includes(id)
      );

      saveCartToStorage(state);
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
      saveCartToStorage(state);
    },
    removeCartItemFromState: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      state.selectedItems = state.selectedItems.filter((id) => id !== itemId);

      // Recalculate grand total
      state.grandTotal = state.items.reduce(
        (total, item) => total + item.subtotal,
        0
      );
      saveCartToStorage(state);
    },
    toggleSelectItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const index = state.selectedItems.indexOf(itemId);

      if (index > -1) {
        state.selectedItems.splice(index, 1);
      } else {
        state.selectedItems.push(itemId);
      }
      saveCartToStorage(state);
    },
    selectAllItems: (state) => {
      state.selectedItems = state.items.map((item) => item.id);
      saveCartToStorage(state);
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
      saveCartToStorage(state);
    },
    clearCart: (state) => {
      state.cartId = null;
      state.items = [];
      state.grandTotal = 0;
      state.selectedItems = [];
      saveCartToStorage(state);
    },
  },
});

export const {
  setCart,
  updateCartItemDetails,
  removeCartItemFromState,
  toggleSelectItem,
  selectAllItems,
  clearSelectedItems,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
