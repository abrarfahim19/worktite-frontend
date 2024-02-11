import { formatDistance, parseISO } from 'date-fns';
import Image from 'next/image';

interface Notification {
  id: number;
  read: boolean;
  image: string;
  message: string;
  time: number;
}

interface NotificationCardProps {
  notification: Notification;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  const currentDate = new Date();
  const date = parseISO(new Date(notification.time * 1000).toISOString());

  const timeAgo = formatDistance(date, currentDate, {
    addSuffix: true,
  });

  return (
    <div className='mx-auto my-5 flex h-16 w-full items-center gap-2 self-center bg-white'>
      <div>
        <div
          className={`h-4 w-4 rounded-full ${
            !notification.read ? 'bg-brand' : 'bg-white'
          }`}
        ></div>
      </div>
      <div>
        <div className='relative  h-10 w-10 rounded-full bg-red-400'>
          <Image
            // width={40}
            // height={40}
            fill
            alt='notification icon'
            src={notification.image}
            className='rounded-full'
          />
        </div>
      </div>
      <div>
        <h3 className='text-sm md:text-base'>{notification.message}</h3>
        <p className='text-sm font-thin italic text-gray-500 md:text-base'>
          {timeAgo}
        </p>
      </div>
    </div>
  );
};
