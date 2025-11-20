import AdminTabs from '@/features/shared/components/admin/admin-tabs';
import BooksContainer from './partials/books-container';
import BooksTitle from './partials/books-title';
import { Button } from '@/components/ui/button';
import SearchBox from './partials/search-box';
import StatusTabs from './partials/status-tabs';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import BookRating from '@/features/books/components/book-rating';
import { Ellipsis } from 'lucide-react';
import BookList from './partials/book-list';

const BooksPage = () => {
  return (
    <>
      <AdminTabs value='books' />
      <BooksContainer>
        <BooksTitle />
        <Button className='h-11 w-60 max-w-full md:h-12'>Add Book</Button>
        <SearchBox />
        <StatusTabs />
        <BookList />
      </BooksContainer>
    </>
  );
};

export default BooksPage;
