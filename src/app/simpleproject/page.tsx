'use client';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import Partner from '@/components/SimpleProject/Partner';
import Banner from '@/components/common/Banner';
import NewsLetters from '@/components/common/NewsLetters';
import {
  BenifitsDiyWorker,
  LatestDiyProject,
  OurDiyProject,
  ServiceStatics,
  TechnicalExpert,
  WhyChooseUs,
} from '@/components/common/SimpleAndComplexProject';
import { Modal } from '@/ui/Modal';
import { useState } from 'react';

export default function SimpleProject() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className='container mx-auto px-4 pt-20'>
      <Modal
        closeModal={closeModal}
        content={<AppointmentModalBody closeModal={closeModal} />}
        isOpen={isOpen}
        defaultCancel={true}
      />
      <Banner onClick={openModal} />
      <Partner />
      <WhyChooseUs />
      <BenifitsDiyWorker />
      <LatestDiyProject />
      <TechnicalExpert />
      <OurDiyProject />
      <ServiceStatics />
      <NewsLetters />
    </div>
  );
}
