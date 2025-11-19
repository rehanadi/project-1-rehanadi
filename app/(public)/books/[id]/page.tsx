import Separator from '@/features/shared/components/separator';
import Details from './partials/details';
import Reviews from './partials/reviews';
import RelatedBooks from './partials/related-books';
import BookContainer from './partials/book-container';

const BookPage = () => {
  return (
    <BookContainer>
      <Details />
      <Separator />
      <Reviews />
      <Separator />
      <RelatedBooks />
    </BookContainer>
  );
};

export default BookPage;
