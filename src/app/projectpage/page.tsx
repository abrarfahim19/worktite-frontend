'use client';
import AppointmentTable from '@/components/ProjectPage/AppointmentTable';
import FinalDocumentation from '@/components/ProjectPage/FinalDocumentation';
import Invoice from '@/components/ProjectPage/Invoice';
import ProjectDetailsTable from '@/components/ProjectPage/ProjectDetailsTable';
import ProjectTimelinePhase from '@/components/ProjectPage/ProjectTimelinePhase';
import ProjectTimelineTable from '@/components/ProjectPage/ProjectTimelineTable';

export default function Home() {
  return (
    <div className='container mx-auto flex flex-col gap-y-10 px-4'>
      <div className='rounded-lg bg-secondary px-8 py-6 md:h-48'>
        <ProjectTimelinePhase />
      </div>
      <div className='flex flex-col items-center gap-y-10 rounded-lg bg-secondary pt-1'>
        <ProjectTimelineTable />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <AppointmentTable />
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
