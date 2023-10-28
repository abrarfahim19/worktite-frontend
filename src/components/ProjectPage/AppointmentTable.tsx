import React from 'react';
import { Text } from '@/ui/Text';
import { Table } from '@/ui/Table';
import { CellContext, createColumnHelper } from '@tanstack/table-core';
import { Tooltip } from '@/ui/Tooltip/Tooltip';
import document from '../../../public/Images/svg/icon/document.svg';
import download from '../../../public/Images/svg/icon/download.svg';
import { Button } from '@/ui/Button';
import SvgIcon from '@/components/common/SvgIcon';

interface IProps {}

type Appointment = {
  date_and_time: string;
  message: string;
  meeting_note: string;
  appointment_type: string;
  status: string;
  meeting_link: string;
};

const appointmentData: Appointment[] = [
  {
    date_and_time: '01/02/2022',
    message: 'hello world',
    meeting_note: 'this is a principal',
    appointment_type: 'online',
    status: 'online',
    meeting_link: ':hh',
  },
  {
    date_and_time: '01/02/2022',
    message: 'hello world',
    meeting_note: 'this is a principal',
    appointment_type: 'online',
    status: 'online',
    meeting_link: ':hh',
  },
  {
    date_and_time: '01/02/2022',
    message: 'hello world',
    meeting_note: 'this is a principal',
    appointment_type: 'online',
    status: 'online',
    meeting_link: ':hh',
  },
];

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
  columnAppointment.accessor('date_and_time', {
    header: () => <span>Last Name</span>,
    cell: (info) => info.getValue(),
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
  columnAppointment.accessor('meeting_note', {
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

const AppointmentTable: React.FC<IProps> = () => {
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
          data={appointmentData}
        />
      </div>
    </>
  );
};

export default AppointmentTable;
