'use client';
import React from 'react';
import AppointmentTable from '@/components/ProjectPage/AppointmentTable';
import ProjectTimelineTable from '@/components/ProjectPage/ProjectTimelineTable';
import ProjectDetailsTable from '@/components/ProjectPage/ProjectDetailsTable';
import FinalDocumentation from '@/components/ProjectPage/FinalDocumentation';
import Invoice from '@/components/ProjectPage/Invoice';

export default function Home() {
  return (
    <div className=' flex flex-col gap-y-10'>
      <div className='flex flex-col items-center gap-y-10 rounded-lg bg-secondary'>
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
