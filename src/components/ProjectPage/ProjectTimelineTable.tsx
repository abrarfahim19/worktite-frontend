import Timer from '@/components/common/Timer';
import { Table } from '@/ui/Table';
import { Text } from '@/ui/Text';
import { createColumnHelper } from '@tanstack/table-core';
import React from 'react';

type ProjectTimeline = {
  date: string;
  time: string;
  ended_at: string;
  started_at: string;
  total_time: string;
  [key: string]: any;
};

interface IProps {
  milestones: ProjectTimeline[];
}

function formatDateTime(datetimeString: string) {
  const datetime = new Date(datetimeString);
  let hours = datetime.getHours();
  const minutes = datetime.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const date = datetime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

  return { time, date };
}

function getDifference(task: { started_at: string; ended_at: string }) {
  const startedAt = new Date(task.started_at);
  const endedAt = new Date(task.ended_at);
  const differenceInSeconds = (endedAt.getTime() - startedAt.getTime()) / 1000;
  return differenceInSeconds;
}

function getDay2Sec(totalTimeInSeconds: number) {
  const days = Math.floor(totalTimeInSeconds / (3600 * 24));
  const hours = Math.floor((totalTimeInSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = Math.floor(totalTimeInSeconds % 60);

  return { days, hours, minutes, seconds };
}

const columnProjectTimeline = createColumnHelper<ProjectTimeline>();

const columns = [
  columnProjectTimeline.accessor(
    (row) => {
      return formatDateTime(row.started_at).date;
    },
    {
      id: 'Date',
    }
  ),
  columnProjectTimeline.accessor(
    (row) => {
      return formatDateTime(row.started_at).time;
    },
    {
      id: 'Start Time',
    }
  ),
  columnProjectTimeline.accessor(
    (row) => {
      return formatDateTime(row.ended_at).time;
    },
    {
      id: 'End Time',
    }
  ),
  columnProjectTimeline.accessor(
    (row) => {
      const time = getDay2Sec(getDifference(row));
      return `${time.days}:${time.hours}:${time.minutes}:${time.seconds}`;
    },
    {
      id: 'Total Time',
    }
  ),
];

const ProjectTimelineTable: React.FC<IProps> = (props) => {
  const totalTime = React.useMemo(() => {
    let totalTimeInSeconds = 0;

    props?.milestones?.forEach((task) => {
      if (task.complete) {
        const differenceInSeconds = getDifference(task);
        totalTimeInSeconds += differenceInSeconds;
      }
    });
    return getDay2Sec(totalTimeInSeconds);
  }, [props?.milestones]);
  return (
    <>
      <Text tag='p' decoration='p'>
        Total Time
      </Text>
      <Timer startTime={totalTime} />
      <Text tag='p' decoration='p'>
        Total working hours
      </Text>
      <div className=' w-full  overflow-x-auto  '>
        {props?.milestones && (
          <Table
            className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
            columns={columns}
            data={props.milestones}
          />
        )}
      </div>
    </>
  );
};

ProjectTimelineTable.propTypes = {};

export default ProjectTimelineTable;
