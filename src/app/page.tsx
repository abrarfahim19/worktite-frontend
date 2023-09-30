'use client';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import { Button } from '@/ui/Button';
import { Modal } from '@/ui/Modal';
import TestModalBody from '@/components/Modal/TestModalBody';
import React, { useState } from 'react';
import { Table } from '@/ui/Table';
import { ColumnDef } from '@tanstack/react-table';
import HomeCard from '@/components/Card/HomeCard';
import MarkCard from '@/components/Card/MarkCard';
import StyleHeading from '@/components/Header/StyleHeading';
import HCarousel from '@/components/HCarousel/HCarousel';
import Image from 'next/image';
import ProjectTab from "@/components/ProjectTab/ProjectTab";
import TechnicalExpertHero from "@/components/Hero/TechnicalExpertHero";

const intents = [undefined, 'primary', 'secondary', 'tartiary'] as const;
const sizes = [undefined, 'medium', 'small', 'large'] as const;
import { useState } from 'react';
import { toast } from 'react-toastify';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    cell: (info) => info.getValue(),
    // footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: 'lastName',
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'visits',
    header: () => <span>Visits</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    footer: (props) => props.column.id,
  },
];

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
];
export default function Home() {
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

  // return (
  //   <div className={`flex w-full h-full bg-white rounded-lg ${reverse ? 'flex-col' : 'flex-col-reverse'}`}>
  //     {/* eslint-disable-next-line jsx-a11y/alt-text */}
  //     {imageUrl && <Image {...imageProps} />}

  const toastify = () => toast('This is Toast');

  return (
    <div className='p-5'>
      <Button onClick={openModal}>Modal</Button>
      <Modal
        closeModal={closeModal}
        content={<AppointmentModalBody closeModal={closeModal} />}
        isOpen={isOpen}
        defaultCancel={true}
      />
      <Button onClick={toastify}>Toast</Button>
    <div className='px-5 md:px-20'>

      <div className='grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2'>
        <HomeCard
          reverse={true}
          title='For a new perspective on furniture'
          imageUrl='https://picsum.photos/797/547'
        />
        <HomeCard
          title='Unparalleled style, unsurpassed comfort'
          imageUrl='https://picsum.photos/797/547'
        />
      </div>
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
              People trust our company and love to have their furnitures
              designed from us
            </Text>
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has.
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
                  <Image {...imageProps} />
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
        <div className='my-2 h-36 md:h-[500px]'>
          <HCarousel />
        </div>
      </div>

      <div>
        <StyleHeading
          title='Our DIY projects'
          description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
        />
        <div className='my-2 h-36 md:h-[500px]'>
          <ProjectTab />
        </div>
      </div>

      <div>
        <StyleHeading
          title='Technical equipments expert'
          description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
        />

        <div className='my-2 h-36 md:h-[500px]'>
          <TechnicalExpertHero />
        </div>
      </div>
      <div>
        <StyleHeading
          title='Technical equipments expert'
          description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
        />

        <div className='my-2 h-36 md:h-[500px]'>
          <TechnicalExpertHero />
        </div>
      </div>
    </div>
  );
}
