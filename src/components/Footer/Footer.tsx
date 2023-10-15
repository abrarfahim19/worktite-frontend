import { Text } from '@/ui/Text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import Empower from '../../../public/Empower_logo.png';
import Texture from '../../../public/Textures_logo.png';
import Photography from '../../../public/Photography_logo.png';
import CircleLogo from '../../../public/Circle_logo.png';
import VLogo from '../../../public/V_logo.png';
import { BiLogoGmail } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSolidLocationPlus } from 'react-icons/bi';

type Props = {};

export const Footer = (props: Props) => {
  const otherLinks = [
    { name: 'Home', link: '' },
    { name: 'Worktite Gallery', link: '' },
    { name: 'About Us', link: '' },
    { name: 'Services', link: '' },
    { name: 'Contact', link: '' },
    { name: 'Terms and Condition', link: '' },
    { name: 'FAQ', link: '' },
  ];
  const contacts = {
    mail: 'yourmail@gmail.com',
    phone: '+523 25 023 258',
    location: '919 Fulton Street West Virginia',
  };
  return (
    // <footer className='flex-col bg-softDark py-5 font-raleway text-whiteText'>
    //   <div className='flex justify-center'>
    //     <div className='container grid grid-cols-1 gap-4 md:grid-cols-4'>
    //

    //
    // </footer>
    <footer className='flex-col items-center bg-softDark font-raleway'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-4 p-8 text-white md:grid-cols-4'>
          <div className=' pb-4 md:pr-4'>
            <div className=''>
              <Image
                alt='Worktite Logo'
                src={'/worktite_white_logo.png'}
                width={120}
                height={40}
                sizes='()'
              />
              <Text className='mt-5 w-72 text-xs'>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words{' '}
              </Text>
              <div className='mt-5 flex gap-4'>
                <AiFillFacebook className='text-2xl' />
                <AiFillLinkedin className='text-2xl' />
                <AiFillTwitterSquare className='text-2xl' />
                <AiFillInstagram className='text-2xl' />
              </div>
            </div>
          </div>
          <div className='pb-4  md:justify-self-center md:pb-0 md:pr-4'>
            <div className=''>
              <Text className='font-bold '>Other Links</Text>
              <div className='w-9 rounded border border-white'></div>
              <div className='mt-2 flex flex-col'>
                {otherLinks.map((item, index) => {
                  return (
                    <Link key={index} href={item.link} className='my-1'>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=' pb-4  md:justify-self-center md:pb-0 md:pr-4'>
            <div className=''>
              <Text className='font-bold '>Contacts</Text>
              <div className='w-9 rounded border border-white'></div>
              <div className='mt-2 flex flex-col'>
                <div className='my-1 flex items-center gap-2'>
                  <BiLogoGmail />
                  <Text>{contacts.mail}</Text>
                </div>
                <div className='my-1 flex items-center gap-2'>
                  <BsFillTelephoneFill />
                  <Text>{contacts.phone}</Text>
                </div>
                <div className='my-1 flex items-center gap-2'>
                  <BiSolidLocationPlus />
                  <Text>{contacts.location}</Text>
                </div>
              </div>
            </div>
          </div>
          <div className=' justify-self-end'>
            <div className='w-full'>
              <Text className='font-bold '>Our Other Services</Text>
              <div className='mb-3 w-9 rounded border border-white'></div>
              <div className='flex justify-between gap-5 md:flex-col'>
                <div className='flex w-1/3 items-center border-0 border-r-2 border-white pr-2 md:w-full md:border-r-0'>
                  <Image
                    src={Empower}
                    alt='Empower Logo'
                    style={{ width: '100%' }}
                  />
                </div>
                <div className='my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
                <div className='flex w-1/3 items-center justify-between gap-5 border-0 border-r-2 border-white pr-2 md:w-full md:border-r-0'>
                  <div className='w-1/2'>
                    <Image
                      src={Texture}
                      alt='Texture Logo'
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className='w-1/2'>
                    <Image
                      src={Photography}
                      alt='Photography Logo'
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                <div className='my-1 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />
                <div className='flex w-1/3 items-center justify-between gap-5 border-0 border-r-2 border-white pr-2 md:w-full md:border-r-0 '>
                  <div className='w-1/3'>
                    <Image
                      src={CircleLogo}
                      alt='Circle Company Logo'
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className='w-1/3'>
                    <Image
                      src={VLogo}
                      alt='V Company Logo'
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr className='my-5 h-px border-0 bg-gray-300' />
        <div className='mx-auto '>
          <Text
            tag={'p'}
            className='self-center pb-5 text-center text-secondary'
          >
            @2022 Worktite , All Rights Reserved
          </Text>
        </div>
      </div>
    </footer>
  );
};

{
  /* <hr className='my-6 hidden h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100' />; */
}
