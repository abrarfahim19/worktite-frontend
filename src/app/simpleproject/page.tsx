'use client';
import React, { useState } from 'react';
import Partner from '@/components/SimpleProject/Partner';
import { Modal } from '@/ui/Modal';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import NewsLetters from '@/components/common/NewsLetters';
import Banner from '@/components/common/Banner';
import {
  BenifitsDiyWorker,
  LatestDiyProject,
  OurDiyProject,
  ServiceStatics,
  TechnicalExpert,
  WhyChooseUs,
} from '@/components/common/SimpleAndComplexProject';

export default function SimpleProject() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className='pt-20'>
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
