import VideoSkeleton from '../VideoSkeleton';

import newsIcon from '../../assets/news.png';
import newsHeader from '../../assets/news-header.png';

import classes from './News.module.css';

const News = () => {
  return (
    <div>
      <img className={classes['header-img']} src={newsHeader} />
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.icon} src={newsIcon} />
          <div className={classes['title-body']}>
            <div className={classes['title-text']}>
              <span className={classes['page-title']}>News</span>
              <span className={classes.subtitle}>35.7M subscribers</span>
            </div>
            <button className={classes['subscribe-btn']}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={classes.tabs}>
          <span className={classes.selected}>HOME</span>
          <span>CHANNELS</span>
          <span>ABOUT</span>
        </div>
      </div>
      <div className={classes['videos-list']}>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
        <div className={classes['video-skeleton']}>
          <VideoSkeleton />
        </div>
      </div>
    </div>
  );
};

export default News;
