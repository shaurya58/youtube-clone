import CategoryCard from '../CategoryCard';
import TrendingVideo from '../TrendingVideo';

import trendingIcon from '../../assets/trending.png';
import musicIcon from '../../assets/music.png';
import filmsIcon from '../../assets/films.png';
import liveIcon from '../../assets/live.png';
import gamingIcon from '../../assets/gaming.png';
import newsIcon from '../../assets/news.png';
import sportIcon from '../../assets/sport.png';
import learningIcon from '../../assets/learning.png';
import fashionAndBeautyIcon from '../../assets/fashion-&-beauty.png';

import classes from './Explore.module.css';

const Explore = () => {
  return (
    <div className={classes.explore}>
      {/* <div> */}
      <div className={classes.categories}>
        <CategoryCard iconSource={trendingIcon} label='Trending' />
        <CategoryCard iconSource={musicIcon} label='Music' />
        <CategoryCard iconSource={filmsIcon} label='Films' />
        <CategoryCard iconSource={liveIcon} label='Live' />
        <CategoryCard iconSource={gamingIcon} label='Gaming' />
        <CategoryCard iconSource={newsIcon} label='News' />
        <CategoryCard iconSource={sportIcon} label='Sport' />
        <CategoryCard iconSource={learningIcon} label='Learning' />
        <CategoryCard
          iconSource={fashionAndBeautyIcon}
          label='Fashion & Beauty'
        />
      </div>
      <div className={classes['trending-videos']}>
        <TrendingVideo />
        <TrendingVideo />
        <TrendingVideo />
        <TrendingVideo />
        <TrendingVideo />
        <TrendingVideo />
        <TrendingVideo />
      </div>
    </div>
  );
};

export default Explore;
