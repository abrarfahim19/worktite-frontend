'use client';
import HomeCard from '@/components/Home/HomeCard';

export default function Home() {
  return (
    <div className=''>
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
  );
}
