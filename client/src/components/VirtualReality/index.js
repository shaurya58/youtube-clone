import VideoSkeleton from '../VideoSkeleton';

import virtualRealityIcon from '../../assets/virtual-reality.png';
import virtualRealityHeader from '../../assets/virtual-reality-header.png';

import classes from './VirtualReality.module.css';

const VirtualReality = () => {
  return (
    <div>
      <img className={classes['header-img']} src={virtualRealityHeader} />
      <div className={classes.header}>
        <div className={classes.title}>
          <img className={classes.icon} src={virtualRealityIcon} />
          <div className={classes['title-body']}>
            <div className={classes['title-text']}>
              <span className={classes['page-title']}>Virtual Reality</span>
              <span className={classes.subtitle}>3.42M subscribers</span>
            </div>
            <button className={classes['subscribe-btn']}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={classes.tabs}>
          <span className={classes.selected}>HOME</span>
          <span>VIDEOS</span>
          <span>PLAYLISTS</span>
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

export default VirtualReality;
