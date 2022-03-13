import classes from './CategoryCard.module.css';

const CategoryCard = ({ iconSource, label }) => {
  return (
    <div className={classes['category-card']}>
      <img className={classes['category-icon']} src={iconSource} />
      <span>{label}</span>
    </div>
  );
};

export default CategoryCard;
