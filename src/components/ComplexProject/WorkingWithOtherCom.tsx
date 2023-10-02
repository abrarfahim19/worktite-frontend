import React from 'react';
import { Text } from '@/ui/Text';
import Image from 'next/image';

const WorkingWithOtherCom = () => {
  const imageProps = {
    layout: 'responsive',
    style: { borderRadius: '8px' },
    width: 338,
    height: 150,
    src: 'https://picsum.photos/350/150' || '',
    alt: '',
  };
  return (
    <div className='grid grid-cols-1 gap-x-3 md:grid-cols-2'>
      <div className='my-8 ps-8'>
        <Text tag='h2' decoration='h4' className='text-3xl font-bold'>
          Companies for outsourcing
        </Text>
        <Text tag='p' decoration='p' className='text-lg font-light'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident,
        </Text>
      </div>
      <div className='grid grid-flow-col grid-rows-2 gap-4'>
        <Image className='row-span-2' {...imageProps} />
        <Image {...imageProps} />
        <Image {...imageProps} />
      </div>
    </div>
  );
};

export default WorkingWithOtherCom;
