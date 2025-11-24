export interface Author {
  id: number;
  name: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthorBook {
  id: number;
  title: string;
  description: string;
  isbn: string;
  publishedYear: number;
  coverImage: string | null;
  price: number;
  stock: number;
  isActive: boolean;
  rating: number;
  reviewCount: number;
  totalCopies: number;
  availableCopies: number;
  borrowCount: number;
  authorId: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetAuthorsResponse {
  success: true;
  message: string;
  data: {
    authors: Author[];
  };
}

export interface GetAuthorBooksResponse {
  success: true;
  message: string;
  data: {
    author: Author;
    books: AuthorBook[];
  };
}

export interface AuthorsState {
  authors: Author[];
  currentAuthor: Author | null;
  authorBooks: Record<number, AuthorBook[]>;
}
