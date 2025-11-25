import AuthorCard from '@/features/authors/components/author-card';
import { Author } from '@/features/authors/types/author.types';

interface AuthorInfoProps {
  author: Author;
  booksCount: number;
}

const AuthorInfo = ({ author, booksCount }: AuthorInfoProps) => {
  return <AuthorCard author={author} booksCount={booksCount} />;
};

export default AuthorInfo;
