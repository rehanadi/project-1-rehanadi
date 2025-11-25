export interface CartBook {
  id: number;
  title: string;
  price: number;
  coverImage: string | null;
  isActive: boolean;
  stock: number;
  isbn: string;
}

export interface CartItem {
  id: number;
  bookId: number;
  qty: number;
  priceSnapshot: number;
  subtotal: number;
  book: CartBook;
  authorName?: string;
  categoryName?: string;
}

export interface GetMyCartResponse {
  success: true;
  message: string;
  data: {
    cartId: number;
    items: CartItem[];
    grandTotal: number;
  };
}

export interface AddCartPayload {
  bookId: number;
  qty: number;
}

export interface AddCartResponse {
  success: true;
  message: string;
  data: {
    id: number;
    cartId: number;
    bookId: number;
    qty: number;
    priceSnapshot: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface RemoveCartItemResponse {
  success: true;
  message: string;
  data: {
    id: number;
    cartId: number;
    bookId: number;
    qty: number;
    priceSnapshot: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface CartState {
  cartId: number | null;
  items: CartItem[];
  grandTotal: number;
  selectedItems: number[];
}
