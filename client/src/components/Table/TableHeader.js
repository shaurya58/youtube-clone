import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = createUseStyles({
  root: {
    color: ({ showSortIcon, sortable }) => showSortIcon && 'black',
    cursor: ({ showSortIcon, sortable }) => sortable && 'pointer',
    '& svg': {
      height: '16px',
      visibility: ({ showSortIcon, sortable }) =>
        showSortIcon ? 'visible' : 'hidden',
      verticalAlign: 'middle',
    },
  },
});

const TableHeader = ({ column, handleSort, ...props }) => {
  const { title, sortable } = column;

  const [showSortIcon, setShowSortIcon] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');

  const classes = useStyles({ showSortIcon, sortable });

  const handleMouseEvent = (_) => {
    setShowSortIcon((prevState) => sortable && !prevState);
  };

  const toggleSortOrder = (event, field, isNumeric) => {
    setSortOrder((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
    handleSort(sortOrder, field, isNumeric);
  };

  return (
    <th
      className={classes.root}
      scope='col'
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
      onClick={(e) => toggleSortOrder(e, column.field, column.isNumeric)}
      {...props}
    >
      {title}
      {sortable &&
        (sortOrder === 'desc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
    </th>
  );
};

export default TableHeader;
