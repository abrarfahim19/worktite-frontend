import { Gallery } from '@/components/GalleryComponents/Gallery';
import { GalleryDropdown } from '@/components/GalleryComponents/GalleryDropdown';
import Image from 'next/image';
import GalleryBg from '../../../public/galleryBg.png';

const Page = () => {
  return (
    <div className=''>
      <Image src={GalleryBg} alt='Empower Logo' style={{ width: '100%' }} />
      <GalleryDropdown />
      <div className='container mx-auto px-4'>
        <Gallery />
      </div>
    </div>
  );
};

export default Page;
