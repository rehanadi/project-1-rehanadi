export interface CategoryData {
  title: string;
  image: string;
  slug: string;
}

export const categoryData: CategoryData[] = [
  {
    title: 'Fiction',
    image: '/icons/categories/fiction.svg',
    slug: 'fiction',
  },
  {
    title: 'Non-Fiction',
    image: '/icons/categories/non-fiction.svg',
    slug: 'non-fiction',
  },
  {
    title: 'Self-Improvement',
    image: '/icons/categories/self-improvement.svg',
    slug: 'self-improvement',
  },
  {
    title: 'Finance',
    image: '/icons/categories/finance.svg',
    slug: 'finance',
  },
  {
    title: 'Science',
    image: '/icons/categories/science.svg',
    slug: 'science',
  },
  {
    title: 'Education',
    image: '/icons/categories/education.svg',
    slug: 'education',
  },
];
