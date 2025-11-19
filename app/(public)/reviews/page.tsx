import AccountTabs from '@/features/shared/components/account-tabs';
import ReviewsContainer from './partials/reviews-container';
import ReviewsTitle from './partials/reviews-title';
import SearchBox from './partials/search-box';
import ReviewList from './partials/review-list';

const ReviewsPage = () => {
  return (
    <ReviewsContainer>
      <AccountTabs value='reviews' />
      <ReviewsTitle />
      <SearchBox />
      <ReviewList />
    </ReviewsContainer>
  );
};

export default ReviewsPage;
