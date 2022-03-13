import VideoSkeleton from '../../VideoSkeleton';

import classes from './Wall.module.css';

const Wall = () => {
  return (
    <div className={classes.wall}>
      <VideoSkeleton />
      <VideoSkeleton />
      <VideoSkeleton />
      <VideoSkeleton />
      <VideoSkeleton />
      <VideoSkeleton />
      <VideoSkeleton />
    </div>
  );
};

export default Wall;
