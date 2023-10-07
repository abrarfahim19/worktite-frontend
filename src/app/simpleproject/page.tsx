'use client';
import React, { useState } from 'react';
import Partner from '@/components/SimpleProject/Partner';
import { Modal } from '@/ui/Modal';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import NewsLetters from '@/components/common/NewsLetters';
import { ClassPropertiess } from '@/ui/common/interface';
import Banner from '@/components/common/Banner';
import {
  BenifitsDiyWorker,
  LatestDiyProject,
  OurDiyProject,
  ServiceStatics,
  TechnicalExpert,
  WhyChooseUs,
} from '@/components/common/SimpleAndComplexProject';

const simpleProjectCss: ClassPropertiess = {
  containerClass: 'mt-4 p-5',
  subContainerClass: 'px-5 md:px-20',
};
export default function SimpleProject() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className={simpleProjectCss.containerClass}>
      <div className={simpleProjectCss.subContainerClass}>
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
    </div>
  );
}
