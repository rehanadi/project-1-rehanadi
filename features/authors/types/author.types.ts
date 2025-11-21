export interface Author {
  name: string;
  booksCount: number;
  image: string;
  link: string;
}

export interface AuthorItem {
  id: number;
  name: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAuthorsResponse {
  success: true;
  message: string;
  data: {
    authors: AuthorItem[];
  };
}

export interface AuthorBook {
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
}

export interface GetAuthorBooksResponse {
  success: true;
  message: string;
  data: {
    author: AuthorItem;
    books: AuthorBook[];
  };
}

export interface AuthorsState {
  authors: AuthorItem[];
  authorBooks: Record<number, AuthorBook[]>;
  currentAuthor: AuthorItem | null;
}
