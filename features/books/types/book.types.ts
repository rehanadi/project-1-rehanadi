export interface Book {
  title: string;
  author: string;
  rating: number;
  image: string;
  link: string;
}

export interface BookItem {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string | null;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: number;
    name: string;
    bio?: string;
    createdAt?: string;
    updatedAt?: string;
  };
  category: {
    id: number;
    name: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface GetBooksParams {
  page?: number;
  limit?: number;
  categoryId?: number;
  q?: string;
}

export interface GetBooksResponse {
  success: true;
  message: string;
  data: {
    books: BookItem[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface GetRecommendedBooksParams {
  by?: 'rating' | 'popular';
  limit?: number;
}

export interface GetRecommendedBooksResponse {
  success: true;
  message: string;
  data: {
    mode: string;
    books: BookItem[];
  };
}

export interface BooksState {
  books: BookItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
  recommendedBooks: BookItem[];
  catalogBooks: BookItem[];
  catalogPagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  } | null;
}
