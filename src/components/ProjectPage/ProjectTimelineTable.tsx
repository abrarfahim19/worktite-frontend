import React from 'react';
import { Text } from '@/ui/Text';
import Timer from '@/components/common/Timer';
import { Table } from '@/ui/Table';
import { createColumnHelper } from '@tanstack/table-core';

interface IProps {}

type ProjectTimeline = {
  Date: string;
  Start_Time: string;
  End_Time: string;
  Total_Time: string;
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

const columnProjectTimeline = createColumnHelper<ProjectTimeline>();

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

const ProjectTimelineTable: React.FC<IProps> = (props) => {
  return (
    <>
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
    </>
  );
};

ProjectTimelineTable.propTypes = {};

export default ProjectTimelineTable;
