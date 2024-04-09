import React from 'react';
import { Text } from '@/ui/Text';
import { Table } from '@/ui/Table';
import { CellContext, createColumnHelper } from '@tanstack/table-core';
import { Tooltip } from '@/ui/Tooltip/Tooltip';
import document from '../../../public/Images/svg/icon/document.svg';
import download from '../../../public/Images/svg/icon/download.svg';
import { Button } from '@/ui/Button';
import SvgIcon from '@/components/common/SvgIcon';

function formatDate(dateString:string) {
  const date = new Date(dateString);
  const months = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${day}th ${months[monthIndex]}, at ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${hours >= 12 ? 'pm' : 'am'}`;

  return formattedDate;
}

type Appointment = {
  appointment_at: string;
  message: string;
  note: string;
  appointment_type: number;
  status: number;
  meeting_link: string;
};

interface IProps {
  appointments: Appointment[]
}

const IconComponent = ({
  info,
  icon,
}: {
  info: CellContext<Appointment, string>;
  icon: React.ReactNode;
}) => {
  return (
    <span className='flex items-center justify-center'>
      <Tooltip message={info.getValue()}>
        <span className='bg-tertiary  p-3.5 '>{icon}</span>
      </Tooltip>
    </span>
  );
};
const columnAppointment = createColumnHelper<Appointment>();

const columnsAppointment = [
  columnAppointment.accessor('appointment_at', {
    header: () => <span>Date and Time</span>,
    cell: (info) => formatDate(info.getValue()),
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor((row) => row.message, {
    id: 'message',
    cell: (info) => (
      <IconComponent
        info={info}
        icon={<SvgIcon icon={download} className='text-xl text-brand' />}
      />
    ),
    header: () => <span>Message</span>,
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor('note', {
    header: () => 'Meeting Note',
    cell: (info) => (
      <IconComponent
        info={info}
        icon={<SvgIcon icon={document} className='text-xl text-brand' />}
      />
    ),
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor('appointment_type', {
    header: () => <span>Appointment Type</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor('status', {
    header: () => <span>Status</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor('meeting_link', {
    header: () => <span></span>,
    cell: (info) => (
      <Button onClick={() => console.log(info.renderValue())}>
        Join meeting
      </Button>
    ),
    footer: (info) => info.column.id,
  }),
];

const AppointmentTable: React.FC<IProps> = (props) => {
  return (
    <>
      <Text tag='p' decoration='p' className='font-semibold'>
        Appointment
      </Text>
      <div className='w-full overflow-x-auto'>
        <Table
          thClassName='border-b'
          tRowClassName='border-b'
          className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
          columns={columnsAppointment}
          data={props?.appointments}
        />
      </div>
    </>
  );
};

export default AppointmentTable;
