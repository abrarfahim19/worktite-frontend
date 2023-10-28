'use client';
import React from 'react';
import { Text } from '@/ui/Text';
import { Avatar } from '@/ui/Avatar';
import { SlOptionsVertical } from 'react-icons/sl';

export default function Home() {
  return (
    <div className=''>
      <div className='grid grid-cols-1 gap-x-5 md:grid-cols-3'>
        <div className='col-span-1  flex-col bg-secondary p-4'>
          <ChatMember />
        </div>
        <div className='col-span-1 bg-secondary md:col-span-2'>
          <div className='flex items-center justify-between border-b-2 p-6'>
            <div className='flex-col '>
              <Text tag='p' decoration='p' className='font-medium'>
                Jecob
              </Text>
              <Text tag='p' decoration='secondary' className=''>
                offline
              </Text>
            </div>
            <SlOptionsVertical />
          </div>
        </div>
      </div>
    </div>
  );
}

interface ChatMemberProps {}

const ChatMember: React.FC<ChatMemberProps> = () => {
  return (
    <>
      <Text tag='p' decoration='p' className='mb-8 font-semibold'>
        Message
      </Text>
      {Array(6)
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
