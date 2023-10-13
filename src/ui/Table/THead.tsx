import React from 'react';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from 'react-icons/ai';

interface ITHead {
  table: any;
  flexRender: any;
  sorted: any;
  thClassName?: string;
  thCellClassName?: string;
}

enum Sort {
  enable = 1,
  disable = 0,
}

export const THead: React.FC<ITHead> = ({
  sorted = Sort.disable,
  table,
  flexRender,
  thClassName = 'text-xs uppercase',
  thCellClassName = 'px-6 py-3',
}) => {
  const renderSort = (header: any) => {
    switch (sorted) {
      case Sort.enable:
        return (
          <div
            {...{
              className: header.column.getCanSort()
                ? 'cursor-pointer select-none flex gap-x-2 items-center'
                : 'cursor-pointer select-none flex gap-x-2 items-center',
              onClick: header.column.getToggleSortingHandler(),
            }}
          >
            {flexRender(header.column.columnDef.header, header.getContext())}
            {{
              asc: <AiOutlineSortAscending className='text-lg' />,
              desc: <AiOutlineSortDescending className='text-lg' />,
            }[header.column.getIsSorted() as string] ?? null}
          </div>
        );

      default:
        return flexRender(header.column.columnDef.header, header.getContext());
    }
  };
  return (
    <thead className={thClassName}>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <th
              className={thCellClassName}
              key={header.id}
              colSpan={header.colSpan}
            >
              {header.isPlaceholder ? null : renderSort(header)}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

/**
 <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
 {table.getHeaderGroups().map((headerGroup: any) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any) => (
            <th className='px-6 py-3' key={header.id} colSpan={header.colSpan}>
              {header.isPlaceholder ? null : (
                <div
                  {...{
                    className: header.column.getCanSort()
                      ? 'cursor-pointer select-none flex gap-x-2 items-center'
                      : 'cursor-pointer select-none flex gap-x-2 items-center',
                    onClick: header.column.getToggleSortingHandler(),
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {{
                    asc: <AiOutlineSortAscending className='text-lg' />,
                    desc: <AiOutlineSortDescending className='text-lg' />,
                  }[header.column.getIsSorted() as string] ?? null}
                </div>
              )}
            </th>
          ))}
        </tr>
      ))}
 </thead>
 */
