export interface CategoryData {
  title: string;
  image: string;
  link: string;
}

export const categoryData: CategoryData[] = [
  {
    title: 'Fiction',
    image: '/icons/categories/fiction.svg',
    link: '/categories/fiction',
  },
  {
    title: 'Non-Fiction',
    image: '/icons/categories/non-fiction.svg',
    link: '/categories/non-fiction',
  },
  {
    title: 'Self-Improvement',
    image: '/icons/categories/self-improvement.svg',
    link: '/categories/self-improvement',
  },
  {
    title: 'Finance',
    image: '/icons/categories/finance.svg',
    link: '/categories/finance',
  },
  {
    title: 'Science',
    image: '/icons/categories/science.svg',
    link: '/categories/science',
  },
  {
    title: 'Education',
    image: '/icons/categories/education.svg',
    link: '/categories/education',
  },
];
