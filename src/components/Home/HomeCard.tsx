import React from 'react';
import Image from 'next/image';
import { Text } from '@/ui/Text';
import Link from 'next/link';
import ButtonWithCircleIcon from '@/components/ButtonWithCircleIcon';

interface Props {
  imageUrl?: string;
  alt?: string;
  title: string;
  reverse?: boolean;
  path: string;
  btnText: string;
}

const HomeCard: React.FC<Props> = ({ imageUrl, alt, title, path, btnText, reverse = false }) => {
  const imageProps = {
    // layout: 'responsive',
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
      <div className='ps-8 my-8'>
        <Text tag='h1' decoration='h3' className='font-light'>
          {title}
        </Text>
        <Link href={path}>
          <ButtonWithCircleIcon btnText={btnText} />
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
