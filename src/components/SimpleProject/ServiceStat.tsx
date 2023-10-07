import React from 'react';
import Image from 'next/image';
import experienceIcon from '../../../public/Images/svg/experience.svg';
import userIcon from '../../../public/Images/svg/users.svg';
import graphIcon from '../../../public/Images/svg/graph.svg';
import penToolIcon from '../../../public/Images/svg/pentool.svg';
import { Text } from '@/ui/Text';

const ServiceStat = () => {
  const images = [experienceIcon, userIcon, graphIcon, penToolIcon];
  return images.map((image, index) => (
    <StaticsCard key={index} image={image} />
  ));
};

export default ServiceStat;

interface IProps {
  image: string;
  alt?: string;
}

const StaticsCard = ({ image, alt }: IProps) => {
  return (
    <div className='relative flex items-center justify-center rounded-md border border-brand py-5'>
      <div className='absolute left-0 -translate-x-1/2 transform bg-brandBackground'>
        <Image priority src={image} alt={alt ?? 'Follow us on Twitter'} />
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
