'use client';
import React from 'react';
import HomeCard from '@/components/Card/HomeCard';

export default function Home() {

  return (
    <div className='p-5'>
      <div className='px-5 md:px-20'>

        <div className='grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-2'>
          <HomeCard
            btnText='Simple Project'
            path='/simpleproject'
            reverse={true}
            title='For a new perspective on furniture'
            imageUrl='https://picsum.photos/797/547'
          />
          <HomeCard
            btnText='Complex Project'
            path='/complexproject'
            title='Unparalleled style, unsurpassed comfort'
            imageUrl='https://picsum.photos/797/547'
          />
        </div>
      </div>
    </div>
  );
}


