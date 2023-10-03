'use client';
import { Button } from '@/ui/Button';
import React, { useState } from 'react';
import MarkCard from '@/components/Card/MarkCard';
import HCarousel from '@/components/HCarousel/HCarousel';
import StyleHeading from '@/components/Header/StyleHeading';
import Tabs from '@/components/ProjectTab/Tabs';
import Image from 'next/image';

import TechnicalExpertHero from '@/components/Hero/TechnicalExpertHero';
import Banner from '@/components/common/Banner';
import All from '@/components/SimpleProject/DIYProjects/All';
import Simple from '@/components/SimpleProject/DIYProjects/Simple';
import { Text } from '@/ui/Text';
import Partner from '@/components/SimpleProject/Partner';
import { Modal } from '@/ui/Modal';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import ServiceStat from '@/components/SimpleProject/ServiceStat';
import NewsLetters from '@/components/common/NewsLetters';

const marketing = [
  {
    title: 'Loyalty',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Professionalism',
    image: true,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Goodwill',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Versatility',
    image: true,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Professionalism',
    image: true,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Loyalty',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Versatility',
    image: true,
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
  {
    title: 'Goodwill',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
  },
];
export default function SimpleProject() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const imageProps = {
    layout: 'responsive',
    style: { borderRadius: '8px' },
    width: 374,
    height: 374,
    src: 'https://picsum.photos/374/374' || '',
    alt: '',
  };
  return (
    <div className='mt-4 p-5'>
      <div className='px-5 md:px-20'>
        <Modal
          closeModal={closeModal}
          content={<AppointmentModalBody closeModal={closeModal} />}
          isOpen={isOpen}
          defaultCancel={true}
        />
        <Banner onClick={openModal} />
        <Partner />
        <div>
          <StyleHeading
            title='Why choose us'
            description='There are many variations of passages of Lorem Ipsum available, but
        the majority have suffered alteration in some form, by injected
        humour, or randomised'
          />

          <div className='grid grid-cols-1 gap-7 md:grid-cols-3'>
            <div className='flex flex-col gap-y-10'>
              <Text tag='h4' decoration='h4'>
                People trust our company and love to have their furniture's
                designed from us
              </Text>
              <Text>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has.
              </Text>
              <Button className='w-1/2 py-4 font-bold'>Contact us</Button>
            </div>
            <div className='grid grid-cols-1 gap-6 md:col-span-2 md:grid-cols-2'>
              {marketing.map((e: any, index) => (
                <MarkCard
                  key={index}
                  serial={index + 1}
                  title={e.title}
                  description={e.description}
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          <StyleHeading
            title='Benifits for the DIY wood worker'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised '
          />
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4'>
            {marketing.map((e: any, index) => {
              if (e?.image) {
                return (
                  <div key={index}>
                    <Image {...imageProps} className='h-full' />
                  </div>
                );
              }
              return (
                <MarkCard
                  key={index}
                  serial={index + 1}
                  title={e.title}
                  description={e.description}
                />
              );
            })}
          </div>
        </div>

        <div>
          <StyleHeading
            title='Our latest DIY projects'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
          />
          <div className='my-2'>
            <HCarousel />
          </div>
        </div>

        <div>
          <StyleHeading
            title='Technical equipments expert'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
          />

          <div className='my-2 '>
            <TechnicalExpertHero />
          </div>
        </div>

        {/*statistics*/}
        <div>
          <StyleHeading
            title='Our DIY projects'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
          />
          <div className='my-2 '>
            <Tabs
              tabElements={{
                All: <All />,
                Simple: <Simple />,
                Complex: <All />,
              }}
            />
          </div>
        </div>

        <div>
          <div className='mt-24 grid grid-cols-1 gap-x-32 gap-y-12 px-12 md:grid-cols-4 md:px-0'>
            <ServiceStat />
          </div>
        </div>

        {/*  subscribe news channel */}
        <NewsLetters />
      </div>
    </div>
  );
}
