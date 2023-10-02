import Image from 'next/image';
import image1 from '../../../../public/image1.png';
import image2 from '../../../../public/image2.png';
import image3 from '../../../../public/image3.png';
import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

function All() {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => setIsShowing(true), []);
  return (
    <Transition
      appear={true}
      show={isShowing}
      as={Fragment}
      enter='transition ease-out duration-700'
      enterFrom='transform opacity-0 scale-55'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-375'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <div className='mx-auto'>
        <div className=' grid w-full grid-cols-1 gap-4 md:grid-cols-2'>
          <div className=' block max-h-[318px] md:col-span-1 md:row-span-2'>
            <Image
              src={image1}
              className='h-full object-cover'
              alt='Image1'
              width={800}
              height={800}
            />
          </div>
          <div className='hidden max-h-[150px] md:col-span-1 md:row-span-1 md:block'>
            <Image
              src={image3}
              className='h-full object-cover'
              alt='Image2'
              width={800}
              height={800}
            />
          </div>
          <div className='hidden max-h-[150px] md:col-span-1 md:row-span-1 md:block'>
            <Image
              src={image2}
              className='h-full object-cover'
              alt='Image3'
              width={800}
              height={800}
            />
          </div>
          <div className='hidden max-h-[300px] md:col-span-2 md:row-span-2 md:block'>
            <Image
              src={image3}
              className='h-full w-full object-cover'
              alt='Image4'
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default All;
