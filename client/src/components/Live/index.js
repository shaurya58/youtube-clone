import VideoSkeleton from '../VideoSkeleton';

import liveIcon from '../../assets/live.png';

import classes from './Live.module.css';

const Live = () => {
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.icon} src={liveIcon} />
          <div className={classes['title-body']}>
            <div className={classes['title-text']}>
              <span className={classes['page-title']}>Live</span>
              <span className={classes.subtitle}>14.4M subscribers</span>
            </div>
            <button className={classes['subscribe-btn']}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={classes.tabs}>
          <span className={classes.selected}>HOME</span>
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

export default Live;
