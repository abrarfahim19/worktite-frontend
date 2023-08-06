import React from 'react';
import Image from 'next/image';
import { Text } from '@/ui/Text';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { Button } from '@/ui/Button';


interface Props {
  imageUrl?:string;
  alt?: string;
  title: string;
  /** card orientation*/
  reverse?: boolean
}
const HomeCard:React.FC<Props> = ({imageUrl, alt, title, reverse=false}) => {

  return (
    <div >
      <div>
        {imageUrl && <Image src={imageUrl} alt={alt ? alt : title} />}
      </div>
      <div>
        <Text tag='h2' >{title}</Text>
        <Button
          intent={'tertiary'}
          className='flex flex-row items-center gap-3 text-xl text-brand'
        >
          <IoArrowForwardCircleOutline className='text-4xl' />
          Complex Project
        </Button>
      </div>
    </div>
  );
};

HomeCard.propTypes = {

};

export default HomeCard;