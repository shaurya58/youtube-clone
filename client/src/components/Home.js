import { Fragment } from 'react';
import RecommendedCategories from './RecommendedCategories';
import Wall from './Wall';

const Home = () => {
  return (
    <Fragment>
      <RecommendedCategories />
      <Wall />
    </Fragment>
  );
};

export default Home;
