import { Text } from '@/ui/Text';

export const TreeCard = () => {
  const data = [
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    {
      title: 'Make an Appointment',
      description:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    },
    // {
    //   title: 'Make an Appointment',
    //   description:
    //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    // },
    // {
    //   title: 'Make an Appointment',
    //   description:
    //     'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.',
    // },
  ];
  const texts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='grid grid-flow-dense grid-cols-1 grid-rows-[10]  md:grid-cols-6'>
      {data.map((item, index) => {
        if (index !== 1 && index % 2 == 0 && index !== data.length - 1) {
          return (
            <div
              key={index}
              className='col-span-3 row-span-2 flex min-h-[150px] flex-row rounded-md'
            >
              <div className='w-4/3 my-2 rounded-md bg-white p-5'>
                <Text tag={'p'} className='font-raleway font-bold'>
                  {item.title}
                </Text>
                <Text tag={'p'} className='font-raleway'>
                  {item.description}
                </Text>
              </div>
              <div className='relative flex w-1/3 items-center justify-center border-r-4 border-brand md:border-r-2'>
                <div className='h-1 w-full bg-brand' />
                <div className='absolute left-[-18px] flex h-9 w-9 items-center justify-center rounded-full bg-brand'>
                  <Text tag={'p'} className='text-sm text-white'>
                    0{index + 1}
                  </Text>
                </div>
              </div>
            </div>
          );
        } else if (index === 1) {
          return (
            <>
              <div className='col-span-3 row-span-1 hidden min-h-[75px] border-brand bg-transparent md:block md:flex-row-reverse md:border-l-2'></div>
              <div className='col-span-3 row-span-2 flex min-h-[150px] flex-row rounded-md md:flex-row-reverse'>
                <div className='w-4/3 my-2 rounded-md bg-white p-5'>
                  <Text tag={'p'} className='font-raleway font-bold'>
                    {item.title}
                  </Text>
                  <Text tag={'p'} className='font-raleway'>
                    {item.description}
                  </Text>
                </div>
                <div className='relative flex w-1/3 items-center justify-center border-r-4 border-brand md:flex-row-reverse md:border-l-2 md:border-r-0'>
                  <div className='h-1 w-full bg-brand' />
                  <div className='absolute left-[-18px] flex h-9 w-9 items-center justify-center rounded-full bg-brand md:left-auto md:right-[-18px]'>
                    <Text tag={'p'} className='text-sm text-white'>
                      0{index + 1}
                    </Text>
                  </div>
                </div>
              </div>
            </>
          );
        } else if (index === data.length - 1) {
          return (
            <>
              <div className='col-span-3 row-span-2 flex min-h-[150px] flex-row rounded-md'>
                <div className='w-4/3 my-2 rounded-md bg-white p-5'>
                  <Text tag={'p'} className='font-raleway font-bold'>
                    {item.title}
                  </Text>
                  <Text tag={'p'} className='font-raleway'>
                    {item.description}
                  </Text>
                </div>
                <div className='relative flex w-1/3 items-center justify-center border-r-4 border-brand md:border-r-2'>
                  <div className='h-1 w-full bg-brand' />
                  <div className='absolute left-[-18px] flex h-9 w-9 items-center justify-center rounded-full bg-brand'>
                    <Text tag={'p'} className='text-sm text-white'>
                      0{index + 1}
                    </Text>
                  </div>
                </div>
              </div>
              <div className='col-span-3 row-span-1 hidden min-h-[75px] border-brand bg-transparent md:block md:flex-row-reverse md:border-l-2'></div>
            </>
          );
        } else {
          return (
            <div
              key={index}
              className='col-span-3 row-span-2 flex min-h-[150px] flex-row rounded-md md:flex-row-reverse'
            >
              <div className='w-4/3 my-2 rounded-md bg-white p-5'>
                <Text tag={'p'} className='font-raleway font-bold'>
                  {item.title}
                </Text>
                <Text tag={'p'} className='font-raleway'>
                  {item.description}
                </Text>
              </div>
              <div className='relative flex w-1/3 items-center justify-center border-r-4 border-brand md:flex-row-reverse md:border-l-2 md:border-r-0'>
                <div className='h-1 w-full bg-brand' />
                <div className='absolute left-[-18px] flex h-9 w-9 items-center justify-center rounded-full bg-brand md:left-auto md:right-[-18px]'>
                  <Text tag={'p'} className='text-sm text-white'>
                    0{index + 1}
                  </Text>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
