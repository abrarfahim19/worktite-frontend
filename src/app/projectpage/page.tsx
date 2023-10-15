'use client';
import React from 'react';
import { createColumnHelper } from '@tanstack/table-core';
import { Table } from '@/ui/Table';
import Timer from '@/components/common/Timer';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';
import { CgNotes } from 'react-icons/cg';
import { GrDocumentDownload } from 'react-icons/gr';
import { Tooltip } from '@/ui/Tooltip/Tooltip';

type ProjectTimeline = {
  Date: string;
  Start_Time: string;
  End_Time: string;
  Total_Time: string;
};
type Appointment = {
  date_and_time: string;
  message: string;
  meeting_note: string;
  appointment_type: string;
  status: string;
  meeting_link: string;
};

const projectTimelineData: ProjectTimeline[] = [
  {
    Date: '01/02/2022',
    Start_Time: '10:15 pm',
    End_Time: '11:30 pm',
    Total_Time: '00:00:09:55',
  },
  {
    Date: '01/02/2022',
    Start_Time: '10:15 pm',
    End_Time: '11:30 pm',
    Total_Time: '00:00:09:55',
  },
  {
    Date: '01/02/2022',
    Start_Time: '10:15 pm',
    End_Time: '11:30 pm',
    Total_Time: '00:00:09:55',
  },
];

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

const columnProjectTimeline = createColumnHelper<ProjectTimeline>();
const columnAppointment = createColumnHelper<Appointment>();

const columns = [
  columnProjectTimeline.accessor('Date', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnProjectTimeline.accessor((row) => row.Start_Time, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: (info) => info.column.id,
  }),
  columnProjectTimeline.accessor('End_Time', {
    header: () => 'Age',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnProjectTimeline.accessor('Total_Time', {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
];
const columnsAppointment = [
  columnAppointment.accessor('date_and_time', {
    header: () => <span>Last Name</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor((row) => row.message, {
    id: 'message',
    cell: (info) => (
      <span className='flex items-center justify-center'>
        <Tooltip message={info.getValue()}>
          <GrDocumentDownload className='text-xl text-brand' />
        </Tooltip>
      </span>
    ),
    header: () => <span>Message</span>,
    footer: (info) => info.column.id,
  }),
  columnAppointment.accessor('meeting_note', {
    header: () => 'Meeting Note',
    cell: (info) => (
      <span className='flex items-center justify-center'>
        <Tooltip message={info.getValue()}>
          <CgNotes className='text-xl text-brand' />
        </Tooltip>
      </span>
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

export default function Home() {
  return (
    <div className=' flex flex-col gap-y-10'>
      <div className='flex flex-col items-center gap-y-10 rounded-lg bg-secondary'>
        <Text tag='p' decoration='p'>
          Total Time
        </Text>
        <Timer />
        <Text tag='p' decoration='p'>
          Total working hours
        </Text>
        <div className=' w-full  overflow-x-auto  '>
          <Table
            className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
            columns={columns}
            data={projectTimelineData}
          />
        </div>
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Text tag='p' decoration='p' className='font-medium'>
          Appointment
        </Text>
        <div className=' w-full  overflow-x-auto  '>
          <Table
            thClassName='border-b'
            tRowClassName='border-b'
            className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
            columns={columnsAppointment}
            data={appointmentData}
          />
        </div>
      </div>
    </div>
  );
}
