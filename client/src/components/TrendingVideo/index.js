import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    height: '100%',
  },
  preview: {
    width: '30%',
    marginRight: '4%',
    borderRadius: '2px',
    backgroundColor: '#a0a0a0',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.3rem',
    width: '60%',
  },
  title: {
    color: 'black',
    fontSize: '0.9rem',
  },
  subtitle: {
    color: '#a0a0a0',
    fontSize: '0.7rem',
  },
  description: {
    marginTop: '1%',
    color: '#a0a0a0',
    fontSize: '0.7rem',
  },
});

const TrendingVideo = ({
  rootProps,
  previewProps,
  titleProps,
  subtitleProps,
  descriptionProps,
  data,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ ...rootProps }}>
      <div className={classes.preview} style={{ ...previewProps }} />
      <div className={classes.details}>
        <div className={classes.title} style={{ ...titleProps }}>
          {data.title}
        </div>
        <div className={classes.subtitle} style={{ ...subtitleProps }}>
          {data.subtitle} &middot; 5 days ago
        </div>
        <div className={classes.description} style={{ ...descriptionProps }}>
          {data.description}
        </div>
      </div>
    </div>
  );
};

export default TrendingVideo;
