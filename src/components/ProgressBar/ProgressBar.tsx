import { HiCheckCircle } from 'react-icons/hi';

const data = [
  { step: 'Start Project', data: '10/10/23', time: '15:30', done: true },
  { step: 'Outsourcing', data: '10/10/23', time: '15:30', done: true },
  { step: 'Furniture being made', data: '10/10/23', time: '15:30', done: true },
  { step: 'Upcoming', data: '10/10/23', time: '15:30', done: false },
  { step: 'Deliver', data: '10/10/23', time: '15:30', done: false },
];
export const ProgressBar = () => {
  return (
    <div className='h-10 w-full bg-red-100'>
      <div className='flex h-60 w-5 flex-col justify-between rounded-b-lg rounded-t-lg bg-green-300'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`${item.done && 'bg-brand'} ${
                index !== data.length - 1 &&
                !data[index + 1].done &&
                item.done &&
                'rounded-b-lg'
              } ${index === 0 && 'rounded-t-lg'} w-full self-center`}
            >
              <HiCheckCircle />
              {index !== data.length - 1 && item.done && (
                <div className='border-black-600 h-full flex-1 bg-brand'></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
// return (
//     <div className='self-start '>
//       {data.map((each, index) => {
//         return (
//           <div
//             key={index}
//             className={`
//             ${index === 0 && 'rounded-t-lg'} ${
//               index === data.length - 1 && 'rounded-b-lg'
//             }
//             h-20 w-5 bg-red-300`}
//           >
//             <div
//               className={`h-20 w-5 ${index === 0 && 'rounded-t-lg'} ${
//                 index !== data.length - 1 &&
//                 data[index + 1].done === false &&
//                 data[index].done === true &&
//                 'rounded-b-lg'
//               } ${index === data.length - 1 && 'rounded-b-lg'}
//                ${each.done ? 'bg-brand' : 'bg-red-300'} flex justify-center`}
//             >
//               <HiCheckCircle />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
