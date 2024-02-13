import StyleHeading from '@/components/Header/StyleHeading';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { TextArea } from '@/ui/TextArea';
import Image from 'next/image';
import { BiLocationPlus, BiPhone } from 'react-icons/bi';
import { HiClock } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import ContactBg from '../../../public/contactBg.png';
const Page = () => {
  return (
    <div>
      <Image src={ContactBg} alt='Contact Us' style={{ width: '100%' }} />
      <div className='container mx-auto mb-8 px-4'>
        <StyleHeading
          title='Contact us'
          description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis laborum inventore eius ipsa qui ducimus quis soluta temporibus alias. Veritatis molestias esse omnis odio deserunt nihil odit explicabo quam placeat?'
        />
        <div>
          <h3 className='text-xl font-semibold md:text-3xl'>
            We are here to assist you
          </h3>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='col-span-1'>
            <div className='mt-4'>
              <Input label='Name' placeholder='Mark John' className='mb-4' />
            </div>
            <div className=''>
              <Input
                label='Email'
                placeholder='mark.john@mail.com'
                className='mb-4'
              />
            </div>
            <div className=''>
              <Input
                label='Phone'
                placeholder='mark.john@mail.com'
                className='mb-4'
              />
            </div>
            <div className=''>
              <TextArea
                label='Your Message'
                placeholder='mark.john@mail.com'
                className=''
              />
            </div>
            <div className='md:hidden'>
              <Button intent={'primary'} className='my-4 w-full'>
                Send
              </Button>
            </div>
          </div>

          <div className='col-span-1 rounded-lg border-[1px] border-black p-4 md:mt-10'>
            <h4 className='text-xl md:mt-4 md:text-3xl'>Info</h4>
            <div className='h-full justify-around md:flex md:flex-col'>
              <div className='mb-4 flex items-center justify-start gap-4 md:mb-0'>
                <MdEmail className='text-brand md:text-2xl' />
                <p className='md:text-xl'>example@gmail.com</p>
              </div>
              <div className='mb-4 flex items-center justify-start gap-4 md:mb-0'>
                <BiPhone className='text-brand md:text-2xl' />
                <p className='md:text-xl'>0012132321236</p>
              </div>
              <div className='mb-4 flex items-start justify-start gap-4 md:mb-0'>
                <BiLocationPlus className='text-brand md:text-2xl' />
                <p className='w-2/3 md:w-full md:text-xl'>
                  sm 94 Broadway st New york, ab park street 1002
                </p>
              </div>
              <div className='flex items-center justify-start gap-4 md:mb-10'>
                <HiClock className='text-brand md:text-2xl' />
                <p className='md:text-xl'>09.00 - 18.00</p>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden md:block'>
          <Button intent={'primary'} size={'large'} className='my-8 w-[100px]'>
            Send
          </Button>
        </div>
        <div className='my-4 overflow-hidden rounded-xl '>
          <iframe
            className='h-[300px] w-full md:h-[400px]'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29208.723763019203!2d90.4260783!3d23.7797925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c9849dc957a7%3A0x11ba7c4052b2e9b4!2sGoKart%20Courtside!5e0!3m2!1sen!2sbd!4v1707817002596!5m2!1sen!2sbd'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
