import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';

import SelectInput from '../SelectInput';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '2rem',
    padding: '0 1.5rem 1rem 0',
    color: '#606060',
  },
  pageSizeSelector: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem',
    width: '20%',
    '& span': {
      whiteSpace: 'nowrap',
    },
  },
  selectInput: {
    width: '40%',
    minWidth: '80px',
  },
  paginationBtnGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    '& button': {
      background: 'transparent',
      border: 'none',
    },
    '& svg': {
      cursor: 'pointer',
    },
    '& span': {
      whiteSpace: 'nowrap',
    },
  },
});

const TableFooter = ({
  className,
  rowsPerPageOptions,
  data,
  handlePageChange,
}) => {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0].value);

  useEffect(() => {
    handlePageChange(currentPage, rowsPerPage);
  }, []);

  const onPageChange = (event, step) => {
    setCurrentPage((prevState) => prevState + step);
    handlePageChange(currentPage + step, rowsPerPage);
  };

  const onRowsPerPageChange = (value) => {
    setRowsPerPage(value);
    setCurrentPage(1);
    handlePageChange(1, value);
  };

  return (
    <div className={`${classes.root} ${className}`}>
      <div className={classes.pageSizeSelector}>
        <span>Rows per page: </span>
        <SelectInput
          className={classes.selectInput}
          options={rowsPerPageOptions}
          handleChange={onRowsPerPageChange}
        />
      </div>
      <div className={classes.paginationBtnGroup}>
        <button
          onClick={(e) => onPageChange(e, 1 - currentPage)}
          disabled={currentPage === 1}
        >
          <FirstPageIcon />
        </button>
        <button
          onClick={(e) => onPageChange(e, -1)}
          disabled={currentPage === 1}
        >
          <NavigateBeforeIcon />
        </button>
        <span>
          {`${(currentPage - 1) * rowsPerPage + 1}-${
            currentPage * rowsPerPage < data.length
              ? currentPage * rowsPerPage
              : data.length
          } of ${data.length}`}
        </span>
        <button
          onClick={(e) => onPageChange(e, 1)}
          disabled={currentPage * rowsPerPage >= data.length}
        >
          <NavigateNextIcon />
        </button>
        <button
          onClick={(e) =>
            onPageChange(e, Math.ceil(data.length / rowsPerPage) - currentPage)
          }
          disabled={currentPage * rowsPerPage >= data.length}
        >
          <LastPageIcon />
        </button>
      </div>
    </div>
  );
};

export default TableFooter;
