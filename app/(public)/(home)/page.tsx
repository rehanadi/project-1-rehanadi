import Banners from './partials/banners';
import Categories from './partials/categories';
import PopularAuthors from './partials/popular-authors';
import Recommendations from './partials/recommendations';

const Home = () => {
  return (
    <div className='flex w-full flex-col gap-6 py-4 md:gap-12 md:pt-12 md:pb-29'>
      <Banners />
      <Categories />
      <Recommendations />
      <PopularAuthors />
    </div>
  );
};

export default Home;
