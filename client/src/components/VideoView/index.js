import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import VideoSkeleton from "../VideoSkeleton";
import Comments from "../Comments";
import VideoDescription from "../VideoDescription";

import classes from "./VideoView.module.css";

const VideoView = () => {
  console.log("inside video view");

  return (
    <div className={classes["video-view"]}>
      <div className={classes["video-pane"]}>
        <video className={classes["video-player"]} />
        <div className={classes["hash-tags"]}>#Music</div>
        <div className={classes.title}>You Give Love A Bad Name | Bon Jovi</div>
        <div className={classes.info}>
          <div className={classes.stats}>
            2,364,282 views &middot; 9 Apr 2021
          </div>
          <div className={classes.actions}>
            <div className={classes["sentiment-icons"]}>
              <div className={classes["actions__btn"]}>
                <ThumbUpIcon />
                43K
              </div>
              <div className={classes["actions__btn"]}>
                <ThumbDownIcon />
                2.6K
              </div>
            </div>
            <div className={classes["actions__btn"]}>
              <ReplyIcon style={{ transform: "scale(-1, 1)" }} />
              SHARE
            </div>
            <div className={classes["actions__btn"]}>
              <PlaylistAddIcon />
              SAVE
            </div>
            <div className={classes["actions__btn"]}>
              <MoreHorizIcon />
            </div>
          </div>
        </div>
        <VideoDescription className={classes["video-description"]} />
        <Comments className={classes.comments} />
      </div>
      <div className={classes.recommendations}>
        <VideoSkeleton style={{ backgroundColor: "green" }} />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
        <VideoSkeleton />
      </div>
    </div>
  );
};

export default VideoView;
