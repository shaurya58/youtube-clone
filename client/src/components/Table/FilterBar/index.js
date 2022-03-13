import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import ClearIcon from '@material-ui/icons/Clear';
import FilterListIcon from '@material-ui/icons/FilterList';

import FilterChip from './FilterChip';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0.5rem 1rem 0 1rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    '& svg': {
      color: '#606060',
    },
  },
  filters: {
    margin: '0 2rem',
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.5rem',
    width: '100%',
    // height: '100%',
  },
  clearIcon: {
    justifyContent: 'flex-end',
  },
});

const filterTemplates = [
  {
    field: 'Title',
    label: (title) => `Title contains '${title}'`,
  },
  {
    field: 'Views',
    label: (operator, value) => `Views ${operator} ${value}`,
  },
  {
    field: 'Visibility',
    label: (value) => `Visibility: ${value}`,
  },
  {
    field: 'Age restriction',
    label: (value) => `Age restriction: ${value}`,
  },
  {
    field: 'Copyright claims',
    label: 'Copyright claims',
  },
  {
    field: 'Description',
    label: (value) => `Description contains '${value}'`,
  },
  {
    field: 'Made for Kids',
    label: (value) => `Made for Kids: ${value}`,
  },
];

const FilterBar = () => {
  const classes = useStyles();

  const [filters, setFilter] = useState([]);

  // const addFilter = (event, value)

  return (
    <div className={classes.root}>
      <FilterListIcon />
      <div className={classes.filters}>
        {/* {filters.map(() => (
              
          ))} */}
        <FilterChip label="Title contains 'Arrow'" />
        <FilterChip label='Views >= 10' />
        <FilterChip label="Description contains 'Arrow'" />
        <FilterChip label='Visibility: Public' />
        <FilterChip label='Age restriction: None' />
        <FilterChip label='Copyright claims' />
        <FilterChip label='Made for Kids: Set by you' />
      </div>
      <ClearIcon className={classes.clearIcon} />
    </div>
  );
};

export default FilterBar;
