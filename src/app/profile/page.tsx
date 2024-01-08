'use client';
import Tabs from '@/components/ProjectTab/Tabs';
import Timer from '@/components/common/Timer';
import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 gap-x-5 md:grid-cols-3'>
        <ProfileSection />
        <div className='col-span-1 md:col-span-2'>
          <div>
            <Tabs
              tabClassName='flex space-x-1 place-self-start rounded-xl bg-transparent px-1 '
              tabBtnClassName='flex items-center gap-3 text-xl font-semibold'
              tabElements={{
                'Running Project': <RunningProject />,
                'Project Request': <ProjectRequest />,
                'Project History': <ProjectRequest />,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ProfileSection = () => {
  return (
    <div className='col-span-1  flex-col items-center bg-secondary p-6'>
      <div className='mx-auto flex w-full flex-col items-center gap-y-2'>
        <Avatar
          size='large'
          decoration={'ring'}
          imageUrl='https://picsum.photos/300/300'
        />
        <Text tag='h2' decoration='p'>
          Sams Musa
        </Text>
        <Text tag='span' decoration='span'>
          alma.lawson@example.com
        </Text>
        <div className='pt-5'>
          <Link href={'/editprofile'}>
            <Button>Edit Profile</Button>
          </Link>
        </div>
        <div className='grid w-full grid-cols-1  gap-y-6'>
          <div className='flex justify-between'>
            <Text tag='p' decoration='tertiary'>
              Gender
            </Text>
            <Text tag='p' decoration='span'>
              Male
            </Text>
          </div>
          <div className='flex justify-between'>
            <Text tag='p' decoration='tertiary'>
              Contact Number
            </Text>
            <Text tag='p' decoration='span'>
              +3483948394
            </Text>
          </div>
          <div className='flex justify-between'>
            <Text tag='p' decoration='tertiary'>
              Company Name
            </Text>
            <Text tag='p' decoration='span'>
              Mediusware
            </Text>
          </div>
          <div className='flex justify-between'>
            <Text tag='p' decoration='tertiary'>
              VAT Number
            </Text>
            <Text tag='p' decoration='span'>
              #9845
            </Text>
          </div>
          <div className='flex justify-between'>
            <Text tag='p' decoration='tertiary'>
              Contact-Name
            </Text>
            <Text tag='p' decoration='span'>
              sfjdsfsdlfj
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const RunningProject = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => setIsShowing(true), []);
  return (
    <Transition
      appear={true}
      show={isShowing}
      as={Fragment}
      enter='transition ease-out duration-700'
      enterFrom='transform opacity-0'
      enterTo='transform opacity-100'
      leave='transition ease-in duration-375'
      leaveFrom='transform opacity-100'
      leaveTo='transform opacity-0'
    >
      <div className='flex w-full flex-col gap-y-4'>
        {Array(3)
          .fill(1)
          .map((e) => (
            <ProjectCard timer={true} key={e} />
          ))}
      </div>
    </Transition>
  );
};

const ProjectRequest = () => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => setIsShowing(true), []);
  return (
    <Transition
      appear={true}
      show={isShowing}
      as={Fragment}
      enter='transition ease-out duration-700'
      enterFrom='transform opacity-0'
      enterTo='transform opacity-100'
      leave='transition ease-in duration-375'
      leaveFrom='transform opacity-100'
      leaveTo='transform opacity-0'
    >
      <div className='flex w-full flex-col gap-y-4'>
        {Array(1)
          .fill(1)
          .map((e) => (
            <ProjectCard timer={false} key={e} />
          ))}
      </div>
    </Transition>
  );
};

const ProjectCard = ({ timer = true }: { timer?: boolean }) => {
  return (
    <div className='grid grid-cols-1 gap-y-4 rounded-lg bg-secondary p-3 md:grid-cols-2'>
      <Text tag='p' decoration='p' className='col-span-full'>
        project
      </Text>
      <div className='grid grid-cols-2 items-center gap-x-4'>
        <Image
          className='h-full rounded-md'
          priority
          width={581}
          height={420}
          src='https://s3-alpha-sig.figma.com/img/7b49/b732/bb3e260010eae85135faf525712a250d?Expires=1696809600&Signature=S~uidnVih0ut19HVxZnxklefS4GZdiJZt7rjB1DtGx8WdsSXZ4KHQZMipM1R2-jgJGuhgyDG9GRUOX52bFFSDHuahbrfyELwLy0sjDvDuH5WIq5bs~0sOOS-W9Lx31FqTZslrZib2-HKWJEGbKmL6jLRCQWXc8nc9qJKYhxW4Vu-Wm6~~TRgEadwYJKkj5hJYhZMWidW~SW4LwhOCqt6uyENqQktKw-tOWLeMPn~m5LwGrkaVRqQ9RSSzR9Mjzo~QrfkVTjWdW--Lav9243-bN62pCTsKGGX4UfkCEXC5aR37ENEGSyq3ptawaznxvohKPIPVUJ~~WDcbEFGw2SHRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alt='subscribe to our news letter'
        />
        <div className='flex flex-col gap-y-2'>
          <Text
            trunc='ellipse'
            tag='p'
            decoration='secondary'
            className='text-lg'
          >
            ChesterField Chair
          </Text>
          <Text className='' tag='p' decoration='span'>
            first Project
          </Text>
          <Text tag='p' decoration='span'>
            first Project
          </Text>
          <Text tag='p' decoration='span'>
            first Project
          </Text>
        </div>
      </div>
      <div
        className={`flex flex-col items-center  ${
          timer ? 'justify-between' : 'justify-center'
        } gap-y-4 justify-self-center md:items-end md:justify-self-end`}
      >
        {timer && <Timer />}
        <Button as='link' href='projectpage'>
          Project Page
        </Button>
      </div>
    </div>
  );
};
