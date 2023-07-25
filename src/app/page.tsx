import { Button } from '@/ui/Button';
import { cx } from 'class-variance-authority';
import Image from 'next/image';

const intents = [undefined, 'primary', 'secondary', 'tartiary'] as const;
const sizes = [undefined, 'medium', 'small', 'large'] as const;

export default function Home() {
  return (
    <div className='bg-gray-600'>
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
      <Button className='w-full'>This is a button</Button>
    </div>
  );
}
