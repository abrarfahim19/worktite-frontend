import React from 'react';
import { Text } from '@/ui/Text';
import groupIcon from '../../../public/Images/svg/bannerCorner.svg';
import tablePNG from '../../../public/Images/woodwork1.png';
import ButtonWithCircleIcon from '@/components/ButtonWithCircleIcon';
import Image from 'next/image';
import './style.css';

interface IProps {
  onClick?: any;
}

const Banner = ({ onClick }: IProps) => {
  return (
    <div className='grid grid-cols-1 gap-x-8 md:grid-cols-2'>
      <div className='relative'>
        <Image
          className='absolute left-0 top-0 -translate-x-12 -translate-y-12 transform '
          priority
          src={groupIcon}
          alt='Follow us on Twitter'
        />
        <h2 className='font-kaushan text-7xl'>
          DIY <span className='font-kaushan text-brand'>Woodwork</span> project
          with your Choice
        </h2>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text decoration='span' tag='p' className='mb-3 mt-6 md:mb-8 md:mt-9'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          You need to be sure there isn't anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the
        </Text>
        <ButtonWithCircleIcon onClick={onClick} btnText='Make an Appointment' />
      </div>
      <div className='relative flex flex-row justify-end'>
        <svg
          className='z-10'
          xmlns='http://www.w3.org/2000/svg'
          width='531'
          height='353'
          viewBox='0 0 531 353'
          fill='none'
        >
          <g clipPath='url(#clipPath)'>
            <path
              d='M530.705 0.543945H5.96924C3.06201 0.543945 0.7052 2.90074 0.7052 5.808V352.544H530.705V0.543945Z'
              fill='#FFB195'
              fillOpacity='0.17'
            />
          </g>
          <defs>
            <clipPath id='clipPath'>
              <path
                d='M530.705 0.543945H5.96924C3.06201 0.543945 0.7052 2.90074 0.7052 5.808V352.544H530.705V0.543945Z'
                fill='#FFB195'
                fillOpacity='0.17'
              />
            </clipPath>
          </defs>
        </svg>
        <Image
          className='clip-svg absolute right-0 top-0 translate-x-8 transform'
          priority
          src={tablePNG}
          alt='banner bg'
        />

        <Image
          className='circle-img z-10'
          priority
          src={tablePNG}
          alt='banner'
        />
      </div>
    </div>
  );
};

export default Banner;
