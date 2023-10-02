import { Avatar } from '@/ui/Avatar';
import { Text } from '@/ui/Text';
import Image from 'next/image';
import React from 'react';

interface Props {
  // imageUrl?: string;
  // alt?: string;
  // title: string;
  // reverse?: boolean;
}

const TechnicalExpertHero: React.FC<Props> = ({}) => {
  const imageProps = {
    layout: 'responsive',
    style: { borderRadius: '8px' },
    width: 338,
    height: 150,
    src: 'https://picsum.photos/350/150' || '',
    alt: 'Jacob Image',
  };

  return (
    <div className='grid grid-cols-1 gap-x-3 md:grid-cols-2'>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      {/*{imageUrl && <Image {...imageProps} />}*/}
      <div className='my-8 ps-8'>
        <Text tag='h2' decoration='h4' className='text-3xl font-bold'>
          We have 05 years of experience in Craftsman service
        </Text>
        <Text tag='p' decoration='p' className='text-lg font-light'>
          {`It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident,`}
        </Text>
        <div className='mt-12 flex items-center justify-start'>
          <Avatar imageUrl={'https://picsum.photos/200/200'} />
          <div className='ml-4'>
            <Text className='text-brand'>Jacob</Text>
            <Text>Founder</Text>
          </div>
        </div>
      </div>
      <div className='w-full pl-44'>
        <Image
          // {...imageProps}
          className='rounded-lg'
          src={'https://picsum.photos/500/500'}
          width={500}
          height={500}
          alt='Jacob Image'
        />
      </div>
    </div>
  );
};

export default TechnicalExpertHero;
