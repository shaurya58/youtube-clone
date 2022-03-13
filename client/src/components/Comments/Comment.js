import CheckIcon from '@material-ui/icons/Check';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import Avatar from '../Avatar';

import youtubeLogo from '../../assets/youtube-logo.png';

import classes from './Comment.module.css';

const Comment = () => {
  return (
    <div className={classes.comment}>
      <div className={classes['comment__header']}>
        {/* <img className={classes['user-avatar']} src={youtubeLogo} /> */}
        <Avatar src={youtubeLogo} size='3rem' />
        <div className={classes['comment__header']}>
          <div className={classes['comment__title']}>
            <span>Pinned by Netflix India</span>
            <div className={classes['comment__author']}>
              Netflix India
              <span className={classes['time-elapsed']}>5 hours ago</span>
            </div>
          </div>
        </div>
      </div>
      <p className={classes['comment__text']}>
        Are you ready for the final chapter?
      </p>
      <div className={classes.actions}>
        <ThumbUpIcon fontSize='small' />
        12K
        <ThumbDownIcon fontSize='small' />
        <span>REPLY</span>
      </div>
      <div className={classes.replies}>
        <div className={classes['replies-visibility-control']}>
          <ArrowDropDownIcon fontSize='small' />
          View 980 replies
        </div>
      </div>
    </div>
  );
};

export default Comment;
