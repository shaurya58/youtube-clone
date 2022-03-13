import React from 'react';
import { createUseStyles } from 'react-jss';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    borderRadius: '18px',
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    padding: '0.5rem 0.8rem',
    fontSize: '13px',
    fontFamily: 'Roboto',
    color: '#0d0d0d',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ccc',
    },
  },
  clearIcon: {
    justifySelf: 'flex-end',
    borderRadius: '50%',
    backgroundColor: '#606060',
    height: '18px',
    width: '18px',
    '& svg': {
      height: '95%',
      width: '95%',
      color: 'white',
      opacity: '1',
      borderRadius: '50%',
    },
  },
});

const FilterChip = ({ label }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {label}
      <span className={classes.clearIcon}>
        <ClearIcon />
      </span>
    </div>
  );
};

export default FilterChip;
