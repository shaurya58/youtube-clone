import Avatar from '../Avatar';

import youtubeLogo from '../../assets/youtube-logo.png';

import classes from './VideoDescription.module.css';

const VideoDescription = ({ className }) => {
  return (
    <div className={className}>
      <div className={classes['video-description__header']}>
        <div className={classes['channel-info']}>
          {/* <img className={classes['channel-avatar']} src={youtubeLogo} /> */}
          <Avatar
            src={youtubeLogo}
            className={classes['channel-avatar']}
            size='50px'
          />
          <div className={classes['channel-title']}>
            <div className={classes['channel-name']}>Netflix</div>
            <div className={classes['channel-subscribers']}>
              20.7M subscribers
            </div>
          </div>
        </div>
        <button className={classes['subscribe-btn']}>SUBSCRIBE</button>
      </div>
      <div className={classes['video-description__body']}>
        <p>
          "You can't outrun your destiny." Experience Marvel Studios' #ShangChi
          and the Legend of the Ten Rings in theaters September 3.
        </p>
        <p>
          Reward your Marvel fandom by joining Marvel Insider! Earn points, then
          redeem for awesome rewards. Terms and conditions apply.
        </p>
        <div className={classes['video-description_visibility-control']}>
          SHOW LESS
        </div>
      </div>
    </div>
  );
};

export default VideoDescription;
