'use client';
import HCarousel from '@/components/HCarousel/HCarousel';
import StyleHeading from '@/components/Header/StyleHeading';
import Tabs from '@/components/ProjectTab/Tabs';
import { useState } from 'react';

import { TreeCard } from '@/components/Card';
import WorkingWithOtherCom from '@/components/ComplexProject/WorkingWithOtherCom';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import Banner from '@/components/common/Banner';
import All from '@/components/SimpleProject/DIYProjects/All';
import Simple from '@/components/SimpleProject/DIYProjects/Simple';
import Partner from '@/components/SimpleProject/Partner';
import { Modal } from '@/ui/Modal';
import ServiceStat from '@/components/SimpleProject/ServiceStat';
import NewsLetters from '@/components/common/NewsLetters';
import {
    OurDiyProjects,
    OurLatestProject,
    OurWorkingProcess, ServiceStatics,
    WhyChooseUs,
    WorkingWithDifferentCompany
} from '@/components/common/SimpleAndComplexProject';

export default function Home() {
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
}
