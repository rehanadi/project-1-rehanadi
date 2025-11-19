import AuthorInfo from './partials/author-info';
import BookList from './partials/book-list';

const AuthorPage = () => {
  return (
    <div className='custom-container flex w-full flex-col gap-4 pt-4 pb-10 md:gap-10 md:pt-12 md:pb-29.5'>
      <AuthorInfo />
      <BookList />
    </div>
  );
};

export default AuthorPage;
