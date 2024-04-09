import React from 'react';
import { Text } from '@/ui/Text';
import { GoCheckCircle, GoCheckCircleFill } from 'react-icons/go';
import { useAxiosSWR } from '@/hooks/useAxiosSwr';
import { apiRoutes } from '@/config/common/apiRoutes';

interface IProps {
  milestones: any;
  count: number;
}

const ProjectTimelinePhase = ({milestones, count}:IProps) => {
  
  return (
    <div className='mt-5 flex w-8 flex-col rounded-3xl bg-special md:h-[44px] md:w-full md:flex-row md:items-center md:justify-between'>
      {milestones?.map((item, index: number) => {
        return (
          <>
            <div
              key={item?.id}
              className={`flex flex-col md:flex-row md:bg-special ${
                index === count - 1 && 'md:rounded-r-3xl md:rounded-rt-3xl'
              } ${index === 0 && 'md:rounded-l-3xl md:rounded-t-3xl '}`}
            >
              <div
                className={`relative flex items-center justify-center md:h-[44px]
            ${
              index !== count - 1 && milestones[index + 1].completed
                ? ''
                : 'rounded-b-3xl pb-1 md:rounded-b-none md:rounded-r-3xl md:pb-0 md:pr-2'
            }
            ${
              index === 0 &&
              'rounded-t-3xl pt-1 md:rounded-l-3xl md:rounded-tr-none md:pl-2 md:pt-0'
            }
            ${item.completed ? 'bg-brand' : 'bg-special md:bg-transparent'}`}
              >
                {item.completed ? (
                  <GoCheckCircleFill
                    className={`text-3xl font-light text-white`}
                  />
                ) : (
                  <GoCheckCircle className={`text-3xl font-light text-brand`} />
                )}
                <div className='absolute left-10 h-10 md:left-0 md:top-12'>
                  <Text
                    tag='p'
                    decoration='p'
                    className='text-sm font-bold text-black'
                  >
                    {item?.title}
                  </Text>
                  <p className='text-xs text-black'>{item.date}</p>
                  <p className='text-xs text-black'>{item.time}</p>
                </div>
              </div>
            </div>
            {index !== count - 1 && (
              <div
                className={`h-16 grow md:h-[44px]  ${
                  milestones[index + 1].completed ? 'bg-brand' : 'bg-special'
                }`}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default ProjectTimelinePhase;
