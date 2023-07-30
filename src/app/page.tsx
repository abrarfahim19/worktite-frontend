import { Button } from '@/ui/Button';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { cx } from 'class-variance-authority';
import { Avatar } from '@/ui/Avatar';
import { Input } from '@/ui/Input';
import { BsCalendarDay } from 'react-icons/bs';
import { TextArea } from '@/ui/TextArea';
import { Text } from '@/ui/Text';
import { Modal } from '@/ui/Modal';
import TestModalBody from '@/components/Modal/TestModalBody';

const intents = [undefined, 'primary', 'secondary', 'tartiary'] as const;
const sizes = [undefined, 'medium', 'small', 'large'] as const;

export default function Home() {
  return (
    <div className=''>
      <table
        className={cx(
          'relative h-max w-max self-center justify-self-center [&_:where(th,td)]:p-2'
        )}
      >
        <thead>
          <tr>
            <th></th>
            {intents.map((intent: any, index: number) => (
              <th key={index} scope='col'>
                {intent || 'default'}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((size, index) => (
            <tr key={index}>
              <th scope='row'>{size || 'default'}</th>
              {intents.map((intent: any, index: number) => (
                <td key={index} scope='col'>
                  <Button {...(intent && { intent })} {...(size && { size })}>
                    {intent || 'default'} button
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        intent={'tertiary'}
        className='flex flex-row items-center gap-3 text-xl text-brand'
      >
        <IoArrowForwardCircleOutline className='text-4xl' />
        Complex Project
      </Button>
      <Avatar
        imageUrl={'https://randomuser.me/api/portraits/men/9.jpg'}
        size={'medium'}
        decoration={'ring'}
      />
      <div className='m-4'>
        <Input
          icon={<BsCalendarDay />}
          lClass='primary'
          label='Phone Number'
          placeholder='phone number 0122'
        />
      </div>
      <div className='m-4'>
        <TextArea
          lClass='primary'
          label='Description'
          placeholder='Add your description'
          rows={4}
        />
      </div>
      <div className='m-4'>
        <Text tag='p' decoration='h1' className='text-red-400'>
          hellow
        </Text>
      </div>
      <Modal
        defaultCancel={true}
        opener={
          <div className='bg-red-200'>
            <Button intent={'secondary'} className='my-10 ml-10'>
              This is modal Opener
            </Button>
            <Button intent={'secondary'} className='my-10 ml-10'>
              This is modal Opener
            </Button>
          </div>
        }
        content={<TestModalBody />}
      />
    </div>
  );
}
