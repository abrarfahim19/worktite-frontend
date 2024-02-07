'use client';
import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { Text } from '@/ui/Text';
import React from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { CiImageOn, CiMicrophoneOn } from 'react-icons/ci';
import { SlOptionsVertical } from 'react-icons/sl';

const message = [
  {
    user_id: 1,
    message: 'hellow',
  },
  {
    user_id: 1,
    message: 'hellow world',
  },
  {
    user_id: 2,
    message: 'hellow',
  },
  {
    user_id: 2,
    message: 'hellow jdkf',
  },
  {
    user_id: 1,
    message: 'hellow',
  },
  {
    user_id: 2,
    message: 'hellow',
  },
  {
    user_id: 1,
    message:
      'hellow sdkfdsk sdkfsdkf skdfsk ksdjfskd fskdf sdkfjsdk ' + 'skdjf',
  },
  {
    user_id: 1,
    message:
      'hellow world hsdf sdkfdsk sdkfsdkf' +
      ' skdfsk ksdjfskd fskdf sdkfjsdk skdjf s rld hsdf ' +
      'sdkfdsk sdkfsdkf skdfsk ksdjfskd fskdf sdkfjsdk skdjf srld hsdf ' +
      'sdkfdsk sdkfsdkf skdfsk ksdjfskd fskdf sdkfjsdk skdjf s',
  },
  {
    user_id: 2,
    message: 'hellow',
  },
  {
    user_id: 2,
    message: 'hellow jdkfsdfds sdf dsf dsf dsf dsf sdf sdf dsfd sf dsfds fds',
  },
  {
    user_id: 1,
    message: 'hellow',
  },
  {
    user_id: 2,
    message: 'hellow',
  },
];

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid h-screen grid-cols-1 gap-x-5 md:grid-cols-3'>
        <div className='col-span-1 hidden h-[90%] flex-col overflow-y-auto bg-secondary p-4 md:block'>
          <ChatMember />
        </div>
        <div className='col-span-1 flex h-[90%] flex-col bg-secondary  p-4 md:col-span-2'>
          <div className='flex items-center justify-between border-b-2 p-2'>
            <div className='flex-col '>
              <Text tag='p' decoration='p' className='font-medium'>
                Jacob
              </Text>
              <Text
                tag='p'
                decoration='secondary'
                className=' flex items-center justify-start gap-x-1'
              >
                <span className='flex h-3 w-3 rounded-full bg-gray-200'></span>
                offline
              </Text>
            </div>
            <SlOptionsVertical />
          </div>
          <div className='item flex w-full flex-grow flex-col justify-between'>
            <div className='flex h-4 flex-grow flex-col gap-y-5 overflow-y-auto p-3'>
              {message.map((el, index) => {
                if (el.user_id == 1) {
                  return (
                    <OtherChat
                      key={index}
                      user={el.user_id}
                      message={el.message}
                    />
                  );
                }
                return <UserChat key={el.user_id} message={el.message} />;
              })}
            </div>
            <div className='flex flex-col gap-y-4'>
              <Input placeholder='Type your message' className='w-full' />
              <div className='flex  items-center justify-between gap-x-6 border-t-2 pt-2'>
                <div className='flex items-center justify-start gap-x-6'>
                  <CiMicrophoneOn />
                  <BsEmojiSmile />
                  <CiImageOn />
                  <Button className='bg-secondary' intent='outlined'>
                    Project page
                  </Button>
                </div>
                <Button
                  className='justify-self-end bg-transparent'
                  intent='outlined'
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const OtherChat = ({ user, message }: { user: any; message: string }) => {
  return (
    <div className='flex w-full'>
      <div className='max-w-1/2 flex w-1/2 items-center justify-start gap-x-4'>
        <Avatar
          // className='w-4'
          size='small'
          decoration={'ring'}
          imageUrl='https://picsum.photos/300/300'
        />
        <div className='rounded bg-brandBackground p-4'>
          <Text tag='p' decoration='p' className='whitespace-normal text-left'>
            {message}
          </Text>
        </div>
      </div>
    </div>
  );
};
const UserChat = ({ message }: { message: string }) => {
  return (
    <div className='flex w-full justify-end'>
      <div className='max-w-1/2 flex w-1/2 items-center justify-end gap-x-4'>
        <div className='rounded bg-brand p-4'>
          <Text
            tag='p'
            decoration='p'
            className='whitespace-normal text-left text-secondary'
          >
            {message}
          </Text>
        </div>
      </div>
    </div>
  );
};

interface ChatMemberProps {}

const ChatMember: React.FC<ChatMemberProps> = () => {
  return (
    <>
      <Text tag='p' decoration='p' className='mb-8 font-semibold'>
        Message
      </Text>
      {Array(13)
        .fill(1)
        .map((el) => (
          <ChatMemberCard key={el} />
        ))}
    </>
  );
};

const ChatMemberCard = () => {
  return (
    <div className='flex w-full items-center justify-between rounded p-2 hover:bg-brand'>
      <div className='flex items-center justify-start  gap-x-2'>
        <Avatar
          size='medium'
          decoration={'ring'}
          imageUrl='https://picsum.photos/300/300'
        />
        <div className=''>
          <Text tag='p' decoration='p' className='text-left font-semibold'>
            Jacob
          </Text>
          <Text tag='p' decoration='secondary' className='text-left'>
            ok fine
          </Text>
        </div>
      </div>
      <div>
        <Text>4h</Text>
      </div>
    </div>
  );
};
