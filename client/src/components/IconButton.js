import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  startIcon: {
    height: '100%',
    '& svg': {
      height: '100%',
    },
  },
  endIcon: {
    height: '100%',
    '& svg': {
      height: '100%',
    },
  },
});

const IconButton = ({ className, startIcon, label, endIcon }) => {
  const classes = useStyles();

  return (
    <button className={`${classes.root} ${className}`}>
      <span className={classes.startIcon}>{startIcon}</span>
      <span>{label}</span>
      <span className={classes.endIcon}>{endIcon}</span>
    </button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  startIcon: PropTypes.node,
  btnText: PropTypes.string,
  endIcon: PropTypes.node,
};

export default IconButton;
