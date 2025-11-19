import Separator from '@/features/shared/components/separator';
import Details from './partials/details';
import Reviews from './partials/reviews';
import RelatedBooks from './partials/related-books';

const BookPage = () => {
  return (
    <div className='custom-container flex w-full flex-col gap-6 py-4 md:gap-16 md:pt-12 md:pb-29.5'>
      <Details />
      <Separator />
      <Reviews />
      <Separator />
      <RelatedBooks />
    </div>
  );
};

export default BookPage;
