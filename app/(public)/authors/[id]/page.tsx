import AuthorContainer from './partials/author-container';
import AuthorInfo from './partials/author-info';
import BookList from './partials/book-list';

const AuthorPage = () => {
  return (
    <AuthorContainer>
      <AuthorInfo />
      <BookList />
    </AuthorContainer>
  );
};

export default AuthorPage;
