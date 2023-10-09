'use client';
import { useState } from 'react';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import Banner from '@/components/common/Banner';
import Partner from '@/components/SimpleProject/Partner';
import { Modal } from '@/ui/Modal';
import NewsLetters from '@/components/common/NewsLetters';
import {
  OurDiyProjects,
  OurLatestProject,
  OurWorkingProcess,
  ServiceStatics,
  WhyChooseUs,
  WorkingWithDifferentCompany,
} from '@/components/common/SimpleAndComplexProject';
import ClientFrontPage from '@/config/hoc/ClientFrontPage';

export default ClientFrontPage(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className='p-5'>
      <div className='px-5 md:px-20'>
        <Modal
          closeModal={closeModal}
          content={<AppointmentModalBody closeModal={closeModal} />}
          isOpen={isOpen}
          defaultCancel={true}
        />
        <Banner onClick={openModal} />
        <Partner />
        <WhyChooseUs />
        <OurWorkingProcess />
        <OurLatestProject />
        <WorkingWithDifferentCompany />
        <OurDiyProjects />
        <ServiceStatics />
        <NewsLetters />
      </div>
    </div>
  );
});
