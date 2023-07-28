import { Button } from '@/ui/Button';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { cx } from 'class-variance-authority';
import { Avatar } from '@/ui/Avatar';

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
            {intents.map((intent) => (
              <th scope='col'>{intent || 'default'}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr>
              <th scope='row'>{size || 'default'}</th>
              {intents.map((intent) => (
                <td scope='col'>
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
        intent={'tartiary'}
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
    </div>
  );
}
