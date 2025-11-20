import AdminTabs from '@/features/shared/components/admin/admin-tabs';
import BooksContainer from './partials/books-container';
import BooksTitle from './partials/books-title';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import BookList from './partials/book-list';
import ButtonAdd from './partials/button-add';

const BooksPage = () => {
  return (
    <>
      <AdminTabs value='books' />
      <BooksContainer>
        <BooksTitle />
        <ButtonAdd />
        <SearchBox />
        <StatusTabs />
        <BookList />
      </BooksContainer>
    </>
  );
};

export default BooksPage;
