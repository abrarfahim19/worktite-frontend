import React from 'react';

interface ITBoady {
  table: any;
  flexRender: any;
}

export const TBody: React.FC<ITBoady> = ({ table, flexRender }) => {
  return (
    <tbody>
      {table.getRowModel().rows.map((row: any) => (
        <tr
          key={row.id}
          className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
        >
          {row.getVisibleCells().map((cell: any) => (
            <td key={cell.id} className='px-6 py-4'>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
