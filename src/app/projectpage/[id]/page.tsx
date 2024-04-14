'use client';

import AppointmentTable from '@/components/ProjectPage/AppointmentTable';
import FinalDocumentation from '@/components/ProjectPage/FinalDocumentation';
import Invoice from '@/components/ProjectPage/Invoice';
import ProjectDetailsTable from '@/components/ProjectPage/ProjectDetailsTable';
import ProjectTimelinePhase from '@/components/ProjectPage/ProjectTimelinePhase';
import ProjectTimelineTable from '@/components/ProjectPage/ProjectTimelineTable';
import { apiRoutes } from '@/config/common/apiRoutes';
import { useAxiosSWR } from '@/hooks/useAxiosSwr';

export default function Home() {
  const {
    data: milestones,
    isLoading,
    count,
  } = useAxiosSWR(
    apiRoutes.PRIVATE.PROJECTS.MILESTONE_LIST('1')({ limit: 10 })
  );
  const {
    data: appointments,
    isLoading: appointmentLoading,
    count: appointmentCount,
  } = useAxiosSWR(
    apiRoutes.PRIVATE.PROJECTS.APPOINTMENT_LIST('1')({ limit: 10 })
  );

  return (
    <div className='container mx-auto flex flex-col gap-y-10 px-4'>
      <div className='rounded-lg bg-secondary px-8 py-6 md:h-48'>
        <ProjectTimelinePhase milestones={milestones} count={count} />
      </div>
      <div className='flex flex-col items-center gap-y-10 rounded-lg bg-secondary pt-1'>
        {!isLoading && <ProjectTimelineTable milestones={milestones} />}
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        {!appointmentLoading && (
          <AppointmentTable appointments={appointments} />
        )}
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <ProjectDetailsTable />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <FinalDocumentation />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Invoice />
      </div>
    </div>
  );
}
