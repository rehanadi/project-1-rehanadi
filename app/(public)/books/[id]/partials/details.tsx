import Breadcrumbs from './breadcrumbs';
import BookInfo from '@/features/books/components/book-info';

const Details = () => {
  return (
    <div className='flex flex-col gap-4 md:gap-6'>
      <Breadcrumbs />
      <BookInfo />
    </div>
  );
};

export default Details;
