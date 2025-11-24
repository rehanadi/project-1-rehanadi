export interface CartItem {
  id: string;
  title: string;
  author: string;
  category: string;
  image: string;
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

export interface CartState {
  items: CartItem[];
}
