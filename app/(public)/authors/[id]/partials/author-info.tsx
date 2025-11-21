import AuthorCard from '@/features/authors/components/author-card';
import { AuthorItem } from '@/features/authors/types/author.types';

interface AuthorInfoProps {
  author: AuthorItem;
  booksCount: number;
}

const AuthorInfo = ({ author, booksCount }: AuthorInfoProps) => {
  return <AuthorCard author={author} booksCount={booksCount} />;
};

export default AuthorInfo;
