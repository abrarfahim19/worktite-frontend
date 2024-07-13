// import React from 'react';
// interface IIndibidual {
//   days: number;
//   hours: number;
//   minutes: number;
//   seconds: number;
// }
// interface ITimer {
//   startTime?: string | IIndibidual;
//   endTime?: string;
// }

// const Timer = (props: ITimer) => {
//   const [timeDifference, setTimeDifference] = React.useState<IIndibidual>(() => {
//     if (props?.startTime instanceof Object) {
//       return props?.startTime;
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       };
//     }
//   });

//   React.useEffect(() => {
//     if (props?.startTime instanceof String) {
//       const interval = setInterval(() => {
//         const now = new Date();
//         const startTimeObj = props?.startTime
//           ? new Date(props?.startTime)
//           : new Date();
//         const difference = now - startTimeObj;

//         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor(
//           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor(
//           (difference % (1000 * 60 * 60)) / (1000 * 60)
//         );
//         const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//         setTimeDifference({ days, hours, minutes, seconds });
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [props.startTime]);
//   return (
//     <div className='grid auto-cols-max grid-flow-col gap-2 text-center md:gap-5'>
//       <div className='flex flex-col gap-y-2 text-sm'>
//         <span className='countdown font-mono text-[28px]'>
//           <span>{timeDifference.days}</span>
//         </span>
//         days
//       </div>
//       <span className='text-2xl'>:</span>
//       <div className='flex flex-col gap-y-2 text-sm'>
//         <span className='countdown font-mono  text-[28px]'>
//           <span>{timeDifference.hours}</span>
//         </span>
//         hours
//       </div>
//       <span className='text-2xl'>:</span>
//       <div className='flex flex-col  gap-y-2 text-sm'>
//         <span className='countdown font-mono  text-[28px]'>
//           <span>{timeDifference.minutes}</span>
//         </span>
//         min
//       </div>
//       <span className='text-2xl'>:</span>
//       <div className='flex flex-col gap-y-2 text-sm'>
//         <span className='countdown font-mono  text-[28px]'>
//           <span>{timeDifference.seconds}</span>
//         </span>
//         sec
//       </div>
//     </div>
//   );
// };

// export default Timer;
import React from 'react';

interface ITimer {
  startTime?: string | IIndividual;
  endTime?: string;
}

interface IIndividual {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<ITimer> = (props) => {
  const [timeDifference, setTimeDifference] = React.useState<IIndividual>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    if (typeof props.startTime === 'string') {
      const interval = setInterval(() => {
        const now = new Date();
        const startTimeObj = props.startTime
          ? new Date(props.startTime.toString())
          : new Date();
        const difference = now.getTime() - startTimeObj.getTime();

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeDifference({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    } else if (typeof props.startTime === 'object') {
      setTimeDifference(props.startTime);
    }
  }, [props.startTime]);

  return (
    <div className='grid auto-cols-max grid-flow-col gap-2 text-center md:gap-5'>
      <div className='flex flex-col gap-y-2 text-sm'>
        <span className='countdown font-mono text-[28px]'>
          <span>{timeDifference.days}</span>
        </span>
        days
      </div>
      <span className='text-2xl'>:</span>
      <div className='flex flex-col gap-y-2 text-sm'>
        <span className='countdown font-mono  text-[28px]'>
          <span>{timeDifference.hours}</span>
        </span>
        hours
      </div>
      <span className='text-2xl'>:</span>
      <div className='flex flex-col  gap-y-2 text-sm'>
        <span className='countdown font-mono  text-[28px]'>
          <span>{timeDifference.minutes}</span>
        </span>
        min
      </div>
      <span className='text-2xl'>:</span>
      <div className='flex flex-col gap-y-2 text-sm'>
        <span className='countdown font-mono  text-[28px]'>
          <span>{timeDifference.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Timer;
