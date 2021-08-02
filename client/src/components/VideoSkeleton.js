import classes from '../styles/VideoSkeleton.module.css';

const VideoSkeleton = () => {
  return (
    <div className={classes["video-skeleton"]}>
      <div className={classes.media} />
      <div className={classes["channel-avatar"]} />
      <div className={classes.title} />
      <div className={classes.subtitle} />
    </div>
  )
}

export default VideoSkeleton;