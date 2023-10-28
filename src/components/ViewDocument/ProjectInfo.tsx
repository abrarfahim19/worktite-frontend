import React from 'react';
import { Table } from '@/ui/Table';
import { CellContext, createColumnHelper } from '@tanstack/table-core';

type Appointment = {
  title: string;
  value: string;
};

const appointmentData: Appointment[] = [
  {
    title: 'title',
    value: 'DIY kitchen',
  },
  {
    title: 'Categories',
    value: 'Table',
  },
  {
    title: 'Pricing type',
    value: 'Hourly',
  },
  {
    title: 'Hourly price',
    value: '$15',
  },
];

const Component = ({ info }: { info: CellContext<Appointment, string> }) => {
  return (
    <span className='inline-block w-full text-left font-semibold'>
      {info.getValue()}
    </span>
  );
};
const columnAppointment = createColumnHelper<Appointment>();

const columnsAppointment = [
  columnAppointment.accessor('title', {
    cell: (info) => <Component info={info} />,
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor((row) => row.value, {
    id: 'value',
    cell: (info) => <Component info={info} />,
    footer: (info) => info.column.id,
  }),
];

const ProjectInfo = () => {
  return (
    <>
      <Table
        thClassName='border-b hidden'
        tRowClassName='border-b'
        className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
        columns={columnsAppointment}
        data={appointmentData}
      />
    </>
  );
};

export default ProjectInfo;
