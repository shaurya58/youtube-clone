import Avatar from '../Avatar';

import videoSrc from '../../assets/demo-vid.mp4';
import sportsIcon from '../../assets/sport.png';

import classes from './PromoRenderer.module.css';

const PromoRenderer = () => {
  return (
    <div className={classes['video-wrapper']}>
      <div className={classes['video-overlay']}>
        <div className={classes['info-overlay']}>
          {/* <img src={sportsIcon} className={classes['channel-avatar']} /> */}
          <Avatar
            src={sportsIcon}
            className={classes['channel-avatar']}
            size='70px'
          />
          <div className={classes['channel-info']}>
            England & Wales Cricket Board &middot; 8.7M &middot; 2 days ago
          </div>
          <div className={classes['video-title']}>
            Classy Root Hits Century! |<br />
            England v India - Day 4 Highlights
          </div>
        </div>
        <div className={classes['carousel-thumbnails']}>
          <img className={classes['carousel-thumbnail']} src={sportsIcon} />
          <img className={classes['carousel-thumbnail']} src={sportsIcon} />
          <img className={classes['carousel-thumbnail']} src={sportsIcon} />
          <img className={classes['carousel-thumbnail']} src={sportsIcon} />
          <img className={classes['carousel-thumbnail']} src={sportsIcon} />
        </div>
      </div>
      <video className={classes['video-player']} autoPlay muted loop>
        <source src={videoSrc} type='video/mp4' />
      </video>
      <div></div>
    </div>
  );
};

export default PromoRenderer;
