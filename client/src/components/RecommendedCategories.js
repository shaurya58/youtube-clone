import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import classes from '../styles/RecommendedCategories.module.css';

const RecommendedCategories = () => {
  return (
    <div className={classes['recommended-categories__container']}>
      <KeyboardArrowLeftIcon
        className={classes['recommended-categories__btn']}
      />
      <div className={classes['recommended-categories']}>
        <div
          className={`${classes['recommended-categories__category']} ${classes.selected}`}
        >
          All
        </div>
        <div className={classes['recommended-categories__category']}>
          Jethalal Champaklal Gada
        </div>
        <div className={classes['recommended-categories__category']}>Music</div>
        <div className={classes['recommended-categories__category']}>
          Comedy
        </div>
        <div className={classes['recommended-categories__category']}>
          Kapil Sharma Show
        </div>
        <div className={classes['recommended-categories__category']}>
          Cricket
        </div>
        <div className={classes['recommended-categories__category']}>
          Buckethead
        </div>
        <div className={classes['recommended-categories__category']}>
          Bon Jovi
        </div>
      </div>
      <KeyboardArrowRightIcon
        className={classes['recommended-categories__btn']}
      />
    </div>
  );
};

export default RecommendedCategories;
