import React from 'react';
import Image from 'next/image';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';

interface Props {
  imageUrl?: string;
  alt?: string;
  title: string;
  reverse?: boolean;
}

const HomeCard: React.FC<Props> = ({ imageUrl, alt, title, reverse = false }) => {
  const imageProps = {
    layout: 'responsive',
    style: { borderRadius: '8px' },
    width: 797,
    height: 547,
    src: imageUrl || '',
    alt: alt || title || '',
  };

  return (
    <div className={`flex w-full h-full bg-white rounded-lg ${reverse ? 'flex-col' : 'flex-col-reverse'}`}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {imageUrl && <Image {...imageProps} />}
      <div className="ps-8 my-8">
        <Text tag="h1" decoration="h3" className="font-light">
          {title}
        </Text>
        <Button intent="tertiary" className="flex items-center gap-3 text-xl text-brand font-bold">
          <IoArrowForwardCircleOutline className="text-4xl" />
          Complex Project
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
