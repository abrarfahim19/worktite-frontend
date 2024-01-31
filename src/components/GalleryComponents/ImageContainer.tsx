import { Photo } from '@/models/Images';
import Image from 'next/image';

type Props = {
  photo: Photo;
};

export const ImageContainer = ({ photo }: Props) => {
  return (
    <div className='group relative h-64 overflow-hidden rounded-xl bg-gray-300'>
      <Image
        alt={photo.alt}
        src={photo.src.large}
        fill={true}
        className='object-cover group-hover:opacity-75'
        sizes='(min-width: 1240px) 373px, (min-width: 940px) calc(25vw + 68px), (min-width: 640px) 50vw, calc(95vw + 15px)'
        // placeholder='blur'
        // blurDataURL={photo.blurredImageURL}
      />
    </div>
  );
};
