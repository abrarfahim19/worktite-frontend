import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import Image from 'next/image';
import React from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';
import { TbMessageDots } from 'react-icons/tb';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

type Props = {};

export const NavBar = (props: Props) => {
  const items = [
    { tag: 'Home', link: '', child: true },
    { tag: 'worktite gallary', link: '', child: false },
    { tag: 'about us', link: '', child: false },
    { tag: 'services', link: '', child: false },
    { tag: 'contact', link: '', child: false },
    { tag: 'FAQ', link: '', child: false },
  ];
  return (
    <div className='flex h-10 items-center justify-between px-5 py-10 md:px-20'>
      <div className='items-center'>
        <Image
          src={'/worktite_logo.png'}
          alt='Worktite company logo'
          width={70}
          height={20}
        />
      </div>
      <div className='hidden gap-4  md:flex md:flex-row'>
        {items.map((item) => (
          <Button
            intent={'tertiary'}
            className='flex items-center gap-3 text-sm text-brand'
          >
            {item.tag}
            {item.child && <BsChevronCompactDown />}
          </Button>
        ))}
      </div>
      <div className='flex items-center gap-4 '>
        <div className='flex items-center gap-4 text-xl'>
          <GoBell />
          <TbMessageDots />
          <Avatar
            decoration={'ring'}
            imageUrl='https://randomuser.me/api/portraits/men/9.jpg'
          />
        </div>
        <div className='items-center sm:block md:hidden'>
          <HiOutlineMenuAlt3 />
        </div>
      </div>
    </div>
  );
};
