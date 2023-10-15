import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { THead } from './THead';
import { TBody } from './TBody';

interface ITable<T> {
  columns: ColumnDef<T>[] | any;
  data: T[];
  sorted?: boolean;
  filter?: boolean;
  tRowClassName?: string;
  tdClassName?: string;
  thClassName?: string;
  thCellClassName?: string;
}

interface DataType {
  [key: string]: any;
}

const VTable = cva('', {
  variants: {
    intent: {
      primary: [
        'flex items-center gap-x-4 p-4 rounded-md hover:opacity-80 border border-[#504845] text-xl',
      ],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

export interface TableProps<T extends DataType>
  extends React.TableHTMLAttributes<HTMLTableElement>,
    ITable<T>,
    VariantProps<typeof VTable> {}

export const Table = <T extends DataType>({
  className,
  tRowClassName,
  tdClassName,
  thClassName,
  thCellClassName,
  intent,
  data,
  columns,
  sorted = false,
  filter = false,
  ...props
}: TableProps<T>) => {
  const [tableData, setTableData] = React.useState<T[]>(() => [...data]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const [tableColumns] = React.useState<ColumnDef<T>[]>(() => [...columns]);
  const [columnVisibility, setColumnVisibility] = React.useState<{
    [key: string]: boolean;
  }>({});

  const table = useReactTable<T>({
    data: tableData,
    columns: tableColumns,
    state: {
      columnVisibility,
      sorting,
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  return (
    <>
      {filter && (
        <div className='inline-block rounded border border-black shadow'>
          <div className='border-b border-black px-1'>
            <label className='flex items-center'>
              <input
                {...{
                  className:
                    'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2',
                  type: 'checkbox',
                  checked: table.getIsAllColumnsVisible(),
                  onChange: table.getToggleAllColumnsVisibilityHandler(),
                }}
              />{' '}
              <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
                Toggle all
              </label>
            </label>
          </div>
          {table.getAllLeafColumns().map((column) => (
            <ul className='space-y-2 text-sm' key={column.id}>
              <li className='flex items-center'>
                <input
                  {...{
                    className:
                      'text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 ',
                    type: 'checkbox',
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />

                <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'>
                  {column.id}
                </label>
              </li>
            </ul>
          ))}
        </div>
      )}
      <div className='h-4' />
      <table className={className}>
        <THead
          thClassName={thClassName}
          thCellClassName={thCellClassName}
          sorted={sorted ? 1 : 0}
          table={table}
          flexRender={flexRender}
        />
        <TBody
          tdClassName={tdClassName}
          tRowClassName={tRowClassName}
          table={table}
          flexRender={flexRender}
        />
      </table>
    </>
  );
};
