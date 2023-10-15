import React from 'react';

interface ITBoady {
  table: any;
  flexRender: any;
  tRowClassName?: string;
  tdClassName?: string;
}

export const TBody: React.FC<ITBoady> = ({
  table,
  flexRender,
  tRowClassName,
  tdClassName = 'px-6 py-4',
}) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row: any) => (
        <tr key={row.id} className={tRowClassName}>
          {row.getVisibleCells().map((cell: any) => (
            <td key={cell.id} className={tdClassName}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
