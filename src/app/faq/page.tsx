import StyleHeading from '@/components/Header/StyleHeading';
import Image from 'next/image';
import { HiSearchCircle } from 'react-icons/hi';
import FaqBg from '../../../public/faqBg.png';

const Page = () => {
  return (
    <div className=''>
      <Image src={FaqBg} alt='Empower Logo' style={{ width: '100%' }} />
      <div className='container mx-auto px-4'>
        <StyleHeading
          title='FAQ'
          description=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur dolorum vel sapiente culpa perferendis assumenda quaerat exercitationem! Ipsa, provident!'
        />
        <div className='flex flex-col-reverse items-start gap-4 md:flex-row md:justify-between'>
          <p className='font-semibold'>How can we help you?</p>
          <div className='flex items-center justify-center gap-4 border-b-2 border-gray-200 '>
            <HiSearchCircle />
            <input
              type='text'
              placeholder='Search'
              className='bg-transparent'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
