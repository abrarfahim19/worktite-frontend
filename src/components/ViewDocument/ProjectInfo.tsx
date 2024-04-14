import { ClientProject } from '@/app/projectpage/interfaces';
import { PRICINGTYPE } from '@/config/common/AppEnums';
import { Table } from '@/ui/Table';
import { CellContext, createColumnHelper } from '@tanstack/table-core';
import React from 'react';

type Appointment = {
  title: string;
  value: string;
};

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

const ProjectInfo = ({ data }: { data: ClientProject }) => {
  const getPricingType = (type: PRICINGTYPE) => {
    if (type === PRICINGTYPE.HOURLY_BASIS) {
      return 'Hourly Basis';
    } else if (type === PRICINGTYPE.MILESTONE_BASIS) {
      return 'Milestone Basis';
    } else {
      return 'Project Basis';
    }
  };
  const columnData = React.useMemo(() => {
    const res: Appointment[] = [];
    res.push({ title: 'title', value: data?.title });
    res.push({ title: 'Categories', value: data?.category?.name });
    res.push({
      title: 'Pricing type',
      value: getPricingType(data?.pricing?.pricing_type),
    });
    res.push({ title: 'Hourly price', value: data?.price });
    return res;
  }, [data]);
  return (
    <>
      <Table
        thClassName='border-b hidden'
        tRowClassName='border-b'
        className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
        columns={columnsAppointment}
        data={columnData}
      />
    </>
  );
};

export default ProjectInfo;
