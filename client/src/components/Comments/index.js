import SortIcon from '@material-ui/icons/Sort';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

import Comment from './Comment';
import TextInput from '../TextInput';

import classes from './Comments.module.css';

const Comments = ({ className }) => {
  return (
    <div className={className}>
      <div className={classes['comments__header']}>
        <div className={classes['comments__count']}>13,089 Comments</div>
        <div className={classes['sort-btn']}>
          <SortIcon />
          SORT BY
        </div>
      </div>
      <div className={classes['comment__form']}>
        <AccountCircleRoundedIcon
          className={classes['user-avatar']}
          fontSize='large'
        />
        {/* <input
          className={classes['comment__input']}
          type='text'
          placeholder='Add a public comment...'
        /> */}
        <TextInput
          className={classes['comment__input']}
          placeholder='Add a public comment...'
        />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
