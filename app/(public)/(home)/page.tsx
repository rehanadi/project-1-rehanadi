import Banners from './partials/banners';
import Categories from './partials/categories';
import HomeContainer from './partials/home-container';
import PopularAuthors from './partials/popular-authors';
import Recommendations from './partials/recommendations';

const HomePage = () => {
  return (
    <HomeContainer>
      <Banners />
      <Categories />
      <Recommendations />
      <PopularAuthors />
    </HomeContainer>
  );
};

export default HomePage;
