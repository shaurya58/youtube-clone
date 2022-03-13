import React, { useState } from 'react';

const TableRow = ({
  index,
  row,
  enableRowSelection,
  isSelected,
  columns,
  handleRowSelection,
  ...props
}) => {
  const [isRowSelected, setIsRowSelected] = useState(false);

  const onRowSelect = () => {
    setIsRowSelected((prevState) => !prevState);
    handleRowSelection(index);
  };

  return (
    <tr {...props}>
      {enableRowSelection && (
        <td>
          <input
            type='checkbox'
            checked={isSelected || isRowSelected}
            onChange={onRowSelect}
          />
        </td>
      )}
      {columns.map((column) => (
        <td
          key={column.title}
          style={{ minWidth: `${column.minWidth}`, ...column.colStyle }}
        >
          {column.render
            ? column.render(row[column.field], column.colStyle)
            : row[column.field]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
