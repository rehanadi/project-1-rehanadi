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

export interface AuthorsState {
  authors: AuthorItem[];
}
