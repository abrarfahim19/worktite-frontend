import Image from 'next/image';
import image1 from '../../../../public/image1.png';
import image2 from '../../../../public/image2.png';
import image3 from '../../../../public/image3.png';

const Simple = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2'>
          <div className=' md:col-span-1 md:row-span-2'>
            <Image
              className='h-full object-cover'
              alt='Image1'
              src={image1}
              width={900}
              height={900}
            />
          </div>
          <div className='hidden md:col-span-2 md:row-span-2 md:block'>
            <Image
              className='h-full object-cover'
              alt='Image3'
              src={image3}
              width={900}
              height={900}
            />
          </div>
          <div className='hidden md:col-span-1 md:row-span-1 md:block'>
            <Image
              className='h-full object-cover'
              alt='Image2'
              src={image2}
              width={900}
              height={900}
            />
          </div>
          <div className='hidden md:col-span-1 md:row-span-1 md:block'>
            <Image
              className='h-full object-cover'
              alt='Image1'
              src={image3}
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
