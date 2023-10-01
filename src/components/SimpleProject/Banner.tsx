import React from 'react';
import { Text } from '@/ui/Text';
import groupIcon from '../../../public/Images/svg/bannerCorner.svg'
import woodworkBg from '../../../public/Images/svg/woodworkProject.svg'
import tablePNG from '../../../public/Images/woodwork1.png'
import ButtonWithCircleIcon from '@/components/ButtonWithCircleIcon';
import Image from 'next/image';
import './style.css'

const Banner = () => {
  return (
    <div className='grid grid-cols-1 gap-x-8 md:grid-cols-2'>
      <div className='relative'>
        <Image
          className='absolute left-0 top-0 transform -translate-x-12 -translate-y-12 '
          priority
          src={groupIcon}
          alt='Follow us on Twitter'
        />
        <h2 className='font-kaushan text-7xl'>DIY <span className='text-brand'>Woodwork</span> project with your Choice
        </h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text decoration='span' tag='p' className='mt-6 mb-3 md:mt-9 md:mb-8'>You need to be sure there isn't anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the</Text>
        <ButtonWithCircleIcon btnText='Make an Appointment' />
      </div>
      <div className='relative flex flex-row justify-end'>
        <Image
          id='clipPath'
          className='z-20'
          priority
          src={woodworkBg}
          alt='banner bg'
        />
        <Image
          className='clip-svg right-0 absolute'
          priority
          src={tablePNG}
          alt='banner bg'
        />
      </div>
    </div>
  );
};

export default Banner;