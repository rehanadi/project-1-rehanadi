export interface Category {
  title: string;
  image: string;
  slug: string;
}

export interface CategoryItem {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetCategoriesResponse {
  success: true;
  message: string;
  data: {
    categories: CategoryItem[];
  };
}

export interface CategoriesState {
  categories: CategoryItem[];
}
