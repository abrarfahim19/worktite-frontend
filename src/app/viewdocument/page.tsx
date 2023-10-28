'use client';
import React from 'react';
import StyleHeading from '@/components/Header/StyleHeading';
import GeneralProjectInfo from '@/components/ViewDocument/GeneralProjectInfo';
import Documents from '@/components/ViewDocument/Documents';
import { Button } from '@/ui/Button';
import ProjectInfo from '@/components/ViewDocument/ProjectInfo';

const sections = {
  VIEW_DOCUMENTS: {
    title: 'View documents',
    description:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised ',
  },
};

const data = [
  {
    name: 'Boom',
    file: 'download.pdf',
  },
  {
    name: 'Boom',
    file: 'download.pdf',
  },
  {
    name: 'Boom',
    file: 'download.png',
  },
  {
    name: 'Boom',
    file: 'download.doc',
  },
];

export default function Home() {
  return (
    <div className=' flex flex-col gap-y-4'>
      <StyleHeading
        title={sections.VIEW_DOCUMENTS.title}
        description={sections.VIEW_DOCUMENTS.description}
      />
      <div className='rounded-lg bg-secondary px-8'>
        <ProjectInfo />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <GeneralProjectInfo />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Documents title='Design documents' data={data} />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Documents title='Technical documents' data={data} />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Documents title='Archive' data={data} />
      </div>
      <div className='py-6'>
        <Button>Back</Button>
      </div>
    </div>
  );
}