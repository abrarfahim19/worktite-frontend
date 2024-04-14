'use client';
import StyleHeading from '@/components/Header/StyleHeading';
import Documents from '@/components/ViewDocument/Documents';
import GeneralProjectInfo from '@/components/ViewDocument/GeneralProjectInfo';
import ProjectInfo from '@/components/ViewDocument/ProjectInfo';
import { apiRoutes } from '@/config/common/apiRoutes';
import useDataFetch from '@/hooks/useDataFetch';
import { Button } from '@/ui/Button';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { ClientDocument, ClientProject } from '../../interfaces';
import { useAxiosSWR } from '@/hooks/useAxiosSwr';
import { DOCTYPE } from '@/config/common/AppEnums';

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
  const { id: projectId } = useParams();
  const router = useRouter();
  const { data: project, refetch } = useDataFetch<ClientProject>(
    apiRoutes.PRIVATE.PROJECTS.PROJECT(projectId as string)
  );
  const { data: all_documents, isLoading } = useAxiosSWR<ClientDocument>(
    apiRoutes.PRIVATE.PROJECTS.DOCUMENT_LIST(projectId as string)({
      limit: 1000,
    })
  );
  const documents = React.useMemo(() => {
    if (all_documents?.length > 0) {
      const separatedDocuments: { [docType: number]: ClientDocument[] } =
        all_documents.reduce((acc, document) => {
          const { doc_type } = document;
          if (!acc[doc_type]) {
            acc[doc_type] = [];
          }
          acc[doc_type].push(document);
          return acc;
        }, {});
      return separatedDocuments;
    }
    return {};
  }, [all_documents]);

  return (
    <div className='container mx-auto flex flex-col gap-y-4 px-4'>
      <StyleHeading
        title={sections.VIEW_DOCUMENTS.title}
        description={project?.description as string}
      />
      <div className='rounded-lg bg-secondary px-8'>
        <ProjectInfo data={project} />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <GeneralProjectInfo />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Documents
          title='Design documents'
          data={DOCTYPE.DESIGN in documents ? documents[DOCTYPE.DESIGN] : []}
          isLoading={isLoading}
        />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Documents
          title='Technical documents'
          data={
            DOCTYPE.TECHNICAL in documents ? documents[DOCTYPE.TECHNICAL] : []
          }
          isLoading={isLoading}
        />
      </div>
      <div className='rounded-lg bg-secondary px-8 py-6'>
        <Documents
          title='Archive'
          data={DOCTYPE.ARCHIVE in documents ? documents[DOCTYPE.ARCHIVE] : []}
          isLoading={isLoading}
        />
      </div>
      <div className='py-6'>
        <Button onClick={() => router.back()}>Back</Button>
      </div>
    </div>
  );
}
