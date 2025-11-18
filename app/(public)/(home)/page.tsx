import Banners from './partials/banners';
import Categories from './partials/categories';
import PopularAuthors from './partials/popular-authors';
import Recommendations from './partials/recommendations';

const HomePage = () => {
  return (
    <div className='custom-container flex w-full flex-col gap-6 py-4 md:gap-12 md:pt-12 md:pb-29'>
      <Banners />
      <Categories />
      <Recommendations />
      <PopularAuthors />
    </div>
  );
};

export default HomePage;
