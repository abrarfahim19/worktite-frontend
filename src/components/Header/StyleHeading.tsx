import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@/ui/Text';

interface Props {
  title: string;
  description: string;
}

const SvgComp = () => {
  return (
    <svg
      className='block w-12  md:w-16  lg:w-24'
      xmlns='http://www.w3.org/2000/svg'
      // width='72'
      // height='15'
      viewBox='0 0 72 15'
      fill='none'
    >
      <path
        d='M71 0.610887C61.1644 7.73423 49.0726 11.9336 36 11.9336C22.9274 11.9336 10.8356 7.73423 1 0.610887'
        stroke='#E55E2C'
      />
      <path
        d='M71 14.3894C61.1644 7.26606 49.0726 3.0667 36 3.0667C22.9274 3.0667 10.8356 7.26606 1 14.3894'
        stroke='#E55E2C'
      />
    </svg>
  );
};

const StyleHeading: React.FC<Props> = ({ title, description }) => {
  return (
    <div className='my-24 flex flex-grow flex-col items-center justify-center py-1'>
      <div className='flex w-full items-center justify-center'>
        <SvgComp />
        <Text
          decoration='h3'
          className='px-7 text-lg font-bold md:text-2xl lg:px-24 lg:text-heading'
        >
          {title}
        </Text>
        <SvgComp />
      </div>
      <Text className='mt-3 text-center' tag='p' decoration='h4'>
        {description}
      </Text>
    </div>
  );
};

StyleHeading.propTypes = {};

export default StyleHeading;
