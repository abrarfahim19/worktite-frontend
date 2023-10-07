import React from 'react';
import { Text } from '@/ui/Text';
import Image from 'next/image';

const WorkingWithOtherCom = () => {
  const imageProps = {
    // layout: 'responsive',
    style: { borderRadius: '8px' },
    width: 295,
    height: 270,
    src: 'https://picsum.photos/295/270' || '',
    alt: '',
  };
  const imageProps1 = {
    // layout: 'responsive',
    style: { borderRadius: '8px' },
    width: 295,
    height: 370,
    src: 'https://picsum.photos/295/370' || '',
    alt: '',
  };
  return (
    <div className='grid grid-cols-1 gap-x-5 md:grid-cols-2'>
      <div className='flex flex-col items-center justify-center'>
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
      <div className='grid grid-cols-2 gap-4'>
        <div className='col-span-1 flex items-center justify-center'>
          <Image className='' {...imageProps1} />
        </div>
        <div className='grid grid-rows-2 gap-4'>
          <Image {...imageProps} />
          <Image {...imageProps} />
        </div>
      </div>
    </div>
  );
};

export default WorkingWithOtherCom;
