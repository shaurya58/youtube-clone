import VideoSkeleton from './VideoSkeleton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import classes from '../styles/VideoView.module.css';

const VideoView = () => {
  return (
    <div className={classes['video-view']}>
      <video className={classes['video-player']} />
      <div className={classes['hash-tags']}>#Music</div>
      <div className={classes.title}>You Give Love A Bad Name | Bon Jovi</div>
      <div className={classes.info}>
        <div className={classes.stats}>2,364,282 views &middot; 9 Apr 2021</div>
        <div className={classes.actions}>
          <div className={classes['like-icon']}>
            <ThumbUpIcon />
            43K
          </div>
          <div className={classes['dislike-icon']}>
            <ThumbDownIcon />
            2.6K
          </div>
          <ReplyIcon style={{ transform: 'scale(-1, 1)' }} />
          SHARE
          <PlaylistAddIcon />
          SAVE
          <MoreHorizIcon />
        </div>
      </div>
      {/* <div className={classes.recommendations}>
        <VideoSkeleton style={{ backgroundColor: 'green' }} />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
      </div> */}
    </div>
  );
};

export default VideoView;
