import AuthorCard from '@/features/authors/components/author-card';

const AuthorInfo = () => {
  return (
    <AuthorCard
      name='Author Name'
      booksCount={5}
      image='/images/avatar.png'
      link='/authors/author-id'
    />
  );
};

export default AuthorInfo;
