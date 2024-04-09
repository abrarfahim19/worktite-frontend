import Timer from '@/components/common/Timer';
import { Table } from '@/ui/Table';
import { Text } from '@/ui/Text';
import { createColumnHelper } from '@tanstack/table-core';
import React from 'react';


type ProjectTimeline = {
  date: string;
  time: string;
  ended_at: string;
  total_time: string;
  [key:string]: any;
};


interface IProps {
  milestones: ProjectTimeline[]
}

const columnProjectTimeline = createColumnHelper<ProjectTimeline>();


const columns = [
  columnProjectTimeline.accessor('date', {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
    header: ()=> <span>Date</span>
  }),
  columnProjectTimeline.accessor((row) => row.time, {
    id: 'time',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Start Time</span>,
    footer: (info) => info.column.id,
  }),
  columnProjectTimeline.accessor('ended_at', {
    header: () => 'End Time',
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnProjectTimeline.accessor('total_time', {
    header: () => <span>Total Time</span>,
    cell: (info)=> info.renderValue(),
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
        {props?.milestones && <Table
          className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
          columns={columns}
          data={props.milestones}
        />}
      </div>
    </>
  );
};

ProjectTimelineTable.propTypes = {};

export default ProjectTimelineTable;
