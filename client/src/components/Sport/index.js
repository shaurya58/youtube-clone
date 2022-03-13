import PromoRenderer from '../PromoRenderer';
import VideoSkeleton from '../VideoSkeleton';

import sportIcon from '../../assets/sport.png';

import classes from './Sport.module.css';

const Sport = () => {
  return (
    <div>
      <PromoRenderer />
      <div className={classes['title-bar']}>
        <div className={classes.title}>
          <img src={sportIcon} className={classes['title-icon']} />
          <div className={classes['title-text']}>
            <span>Sports</span>
            <span className={classes.subtitle}>75.1M subscribers</span>
          </div>
        </div>
        <button className={classes['subscribe-btn']}>SUBSCRIBE</button>
      </div>
      <div className={classes['videos-section']}>
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

export default Sport;
