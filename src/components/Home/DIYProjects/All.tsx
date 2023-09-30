import React from 'react';


function All() {
  const randomInt = (min: number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className='grid grid-cols-1 gap-y-5 gap-x-5 md:grid-cols-3'>
      {
        Array(20).fill(1).map((e)=><ProjectImageContainer key={e} className={`grid bg-brand grid-rows-${randomInt(1,2)} min-h-[500]`} />)
      }
    </div>
  );
}

export default All;


const ProjectImageContainer = ({className}:{className: string})=>{
  return (
    <div className={className}>hello</div>
  )
}