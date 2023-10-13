import React from 'react';

const Timer = () => {
  return (
    <div className='grid auto-cols-max grid-flow-col gap-2 text-center md:gap-5'>
      <div className='flex flex-col gap-y-2 text-sm'>
        <span className='countdown font-mono text-[28px]'>
          <span>343</span>
        </span>
        days
      </div>
      <span className='text-2xl'>:</span>
      <div className='flex flex-col gap-y-2 text-sm'>
        <span className='countdown font-mono  text-[28px]'>
          <span>34</span>
        </span>
        hours
      </div>
      <span className='text-2xl'>:</span>
      <div className='flex flex-col  gap-y-2 text-sm'>
        <span className='countdown font-mono  text-[28px]'>
          <span>34</span>
        </span>
        min
      </div>
      <span className='text-2xl'>:</span>
      <div className='flex flex-col gap-y-2 text-sm'>
        <span className='countdown font-mono  text-[28px]'>
          <span>34</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
