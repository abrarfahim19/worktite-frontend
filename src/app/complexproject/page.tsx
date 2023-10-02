'use client';
import { Button } from '@/ui/Button';
import React, { useState } from 'react';
import StyleHeading from '@/components/Header/StyleHeading';
import HCarousel from '@/components/HCarousel/HCarousel';
import Image from 'next/image';
import Tabs from '@/components/ProjectTab/Tabs';

import experienceicon from '../../../public/Images/svg/experience.svg';
import { Input } from '@/ui/Input';
import All from '@/components/Home/DIYProjects/All';
import { Text } from '@/ui/Text';
import TechnicalExpertHero from '@/components/Hero/TechnicalExpertHero';
import MarkCard from '@/components/Card/MarkCard';
import { TreeCard } from '@/components/Card';
import WorkingWithOtherCom from '@/components/ComplexProject/WorkingWithOtherCom';
import { Modal } from '@/ui/Modal';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import Banner from '@/components/SimpleProject/Banner';
import Partner from '@/components/SimpleProject/Partner';

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
            title='Our working process'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised '
          />
          <div className=''>
            <TreeCard />
          </div>
        </div>

        <div>
          <StyleHeading
            title='Our latest Complex projects'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
          />
          <div className='my-2 h-36 md:h-[500px]'>
            <HCarousel />
          </div>
        </div>

        <div>
          <StyleHeading
            title='Working with different comapnies for outsourcing'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
          />

          <div className='my-2 h-36 md:h-[500px]'>
            <WorkingWithOtherCom />
          </div>
        </div>

        {/*statistics*/}
        <div>
          <StyleHeading
            title='Our DIY projects'
            description='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised'
          />
          <div className='my-2 h-36 md:h-[500px]'>
            <Tabs
              tabElements={{
                All: <All />,
                Simple: <All />,
                Complex: <All />,
              }}
            />
          </div>
        </div>

        <div>
          <div className='grid grid-cols-1 gap-x-32 gap-y-12 px-12 md:grid-cols-4 md:px-0'>
            {Array(4)
              .fill(1)
              .map((e) => (
                <Statics key={e} />
              ))}
          </div>
        </div>

        {/*  subscribe news channel */}
        <div className='mt-24 flex flex-col rounded-md bg-[#FFCD8D] md:flex-row'>
          <div className='rounded-md'>
            <Image
              className='rounded-md'
              priority
              width={581}
              height={420}
              src='https://s3-alpha-sig.figma.com/img/7b49/b732/bb3e260010eae85135faf525712a250d?Expires=1696809600&Signature=S~uidnVih0ut19HVxZnxklefS4GZdiJZt7rjB1DtGx8WdsSXZ4KHQZMipM1R2-jgJGuhgyDG9GRUOX52bFFSDHuahbrfyELwLy0sjDvDuH5WIq5bs~0sOOS-W9Lx31FqTZslrZib2-HKWJEGbKmL6jLRCQWXc8nc9qJKYhxW4Vu-Wm6~~TRgEadwYJKkj5hJYhZMWidW~SW4LwhOCqt6uyENqQktKw-tOWLeMPn~m5LwGrkaVRqQ9RSSzR9Mjzo~QrfkVTjWdW--Lav9243-bN62pCTsKGGX4UfkCEXC5aR37ENEGSyq3ptawaznxvohKPIPVUJ~~WDcbEFGw2SHRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
              alt='subscribe to our news letter'
            />
          </div>
          <div className=' px-3 py-4 md:px-12 md:py-24'>
            <Text decoration='h2' tag='h2'>
              Subscribe Newsletters
            </Text>
            <Text decoration='p' tag='p' className='text-lg font-light'>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical{' '}
            </Text>
            <form className='flex rounded border-2 border-white'>
              <Input className='w-full border-none' placeholder='Mark Jhon' />
              <Button className='w-2/5 bg-white text-brand '>subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const Statics = () => {
  return (
    <div className='relative flex items-center justify-center rounded-md border border-brand py-5'>
      <div className='absolute left-0 -translate-x-1/2 transform bg-brandBackground'>
        <Image priority src={experienceicon} alt='Follow us on Twitter' />
      </div>
      <div>
        <Text decoration='h1' tag='h1'>
          05+
        </Text>
        <Text decoration='p' tag='p'>
          Years experience
        </Text>
      </div>
    </div>
  );
};
