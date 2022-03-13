import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    backgroundColor: 'transparent',
    boxShadow: (elevation) => `0 0 ${elevation * 4}px 0 rgba(0, 0, 0, 0.1)`,
  },
});

const Surface = ({ elevation, className, ...props }) => {
  const classes = useStyles(elevation);

  return (
    <div className={`${classes.root} ${className}`} {...props}>
      {props.children}
    </div>
  );
};

export default Surface;
