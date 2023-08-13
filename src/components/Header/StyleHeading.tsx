import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@/ui/Text';

interface Props {
  title: string
}

const StyleHeading: React.FC<Props> = ({ title}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      <div></div>
      <div className='flex justify-between items-center px-4 md:px-8'>
        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="72" height="15" viewBox="0 0 72 15" fill="none">
          <path d="M71 0.610887C61.1644 7.73423 49.0726 11.9336 36 11.9336C22.9274 11.9336 10.8356 7.73423 1 0.610887" stroke="#E55E2C"/>
          <path d="M71 14.3894C61.1644 7.26606 49.0726 3.0667 36 3.0667C22.9274 3.0667 10.8356 7.26606 1 14.3894" stroke="#E55E2C"/>
        </svg>
        <Text decoration='h3' className='font-bold'>{title}</Text>
        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="72" height="15" viewBox="0 0 72 15" fill="none">
          <path d="M71 0.610887C61.1644 7.73423 49.0726 11.9336 36 11.9336C22.9274 11.9336 10.8356 7.73423 1 0.610887" stroke="#E55E2C"/>
          <path d="M71 14.3894C61.1644 7.26606 49.0726 3.0667 36 3.0667C22.9274 3.0667 10.8356 7.26606 1 14.3894" stroke="#E55E2C"/>
        </svg>
      </div>
      <div></div>
    </div>

  );
};

StyleHeading.propTypes = {

};

export default StyleHeading;