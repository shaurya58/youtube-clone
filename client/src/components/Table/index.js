import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import SearchIcon from '@material-ui/icons/Search';

import Surface from '../Surface';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableFooter from './TableFooter';
import TextInput from '../TextInput';
import FilterBar from './FilterBar';

const useStyles = createUseStyles({
  table: {
    width: '100%',
    fontFamily: 'Roboto',
    fontSize: '12px',
    color: '#606060',
    padding: '1rem 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem 2rem 1rem 2rem',
  },
  title: {
    fontSize: '24px',
    fontWeight: '450',
  },
  searchBar: {
    justifySelf: 'flex-end',
  },
  header: {
    '& tr': {
      width: '100%',
      padding: '0 1rem',
    },
    '& th': {
      padding: '0.8rem 0',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      '& input': {
        marginLeft: '1.4rem',
      },
    },
  },
  body: {
    '& tr': {
      width: '100%',
      padding: '0 1rem',
    },
    '& td': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      '& input': {
        marginLeft: '1.4rem',
      },
    },
  },
  footer: {
    '& tr': {
      width: '100%',
    },
  },
  emptyRowsMessage: {
    fontSize: '15px',
    padding: '5% 0',
    textAlign: 'center',
  },
});

const Table = ({
  data,
  columns,
  showToolbar,
  enableRowSelection,
  emptyRowsMessage,
}) => {
  const classes = useStyles();

  const [selectedRows, setSelectedRows] = useState([]);
  const [paginatedData, setPaginatedData] = useState([...data]);

  const handleSort = (sortOrder, field, isNumeric) => {
    let sortedPaginatedData = [];
    if (sortOrder === 'asc')
      sortedPaginatedData = paginatedData.sort((a, b) => {
        if (isNumeric) {
          return Number(a[field]) > Number(b[field]) ? 1 : -1;
        } else {
          return a[field] > b[field] ? 1 : -1;
        }
      });
    else
      sortedPaginatedData = paginatedData.sort((a, b) => {
        if (isNumeric) {
          return Number(a[field]) > Number(b[field]) ? -1 : 1;
        } else {
          return a[field] > b[field] ? -1 : 1;
        }
      });

    setPaginatedData([...sortedPaginatedData]);
  };

  const toggleAllRowsSelection = () => {
    if (selectedRows.length === 0) {
      let selectedRows = [];
      data.forEach((row) => selectedRows.push(row));
      setSelectedRows(selectedRows);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelection = (index) => {
    let updatedSelectedRows = [...selectedRows];
    updatedSelectedRows.push(data[index]);
    setSelectedRows(updatedSelectedRows);
  };

  const handlePageChange = (currentPage, rowsPerPage) => {
    setPaginatedData([
      ...data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage),
    ]);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();

    let filteredData = data.filter((row) => {
      return row.video.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setPaginatedData(filteredData);
  };

  return (
    // <Surface elevation={12} style={{ width: '100%' }}>
    <Surface elevation={0} style={{ width: '100%' }}>
      {showToolbar && (
        <div className={classes.toolbar}>
          <span className={classes.title}>Table title</span>
          <TextInput startIcon={<SearchIcon />} onChange={handleSearch} />
        </div>
      )}
      <FilterBar />
      <table className={classes.table}>
        <thead className={classes.header}>
          <tr>
            {enableRowSelection && (
              <th>
                <input
                  type='checkbox'
                  checked={selectedRows.length === data.length}
                  onChange={toggleAllRowsSelection}
                />
              </th>
            )}
            {columns.map((column, index) => (
              <TableHeader
                key={index}
                column={column}
                handleSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <tbody className={classes.body}>
          {paginatedData.length !== 0 ? (
            paginatedData.map((row, index) => (
              <TableRow
                index={index}
                row={row}
                enableRowSelection={enableRowSelection}
                isSelected={selectedRows.length === data.length}
                columns={columns}
                handleRowSelection={handleRowSelection}
                key={index}
              />
            ))
          ) : (
            <tr>
              <td className={classes.emptyRowsMessage} colSpan={columns.length}>
                {emptyRowsMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <TableFooter
        handlePageChange={handlePageChange}
        rowsPerPageOptions={[
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
          { value: 4, label: '4' },
        ]}
        data={data}
      />
    </Surface>
  );
};

export default Table;

/* TODO:
 * Add optional checkboxes to rows
 * Sorting feature
 * Filter
 * Search
 * Pagination
 */
