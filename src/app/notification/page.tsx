'use client';
import { notificationData } from '@/config/common';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { Tab } from '@headlessui/react';
import {
  format,
  isThisMonth,
  isThisWeek,
  isThisYear,
  isToday,
  parseISO,
} from 'date-fns';
import Image from 'next/image';
import { Fragment } from 'react';

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

interface ProcessedTime {
  today: Notification[];
  thisWeek: Notification[];
  thisMonth: Notification[];
  thisYear: Notification[];
  older: Notification[];
}

interface ProcessedNotification {
  tag: string;
  notifications: Notification[];
}

const getTimeAgo = (timestamp: number): string => {
  const date = parseISO(new Date(timestamp * 1000).toISOString());

  if (isToday(date)) {
    return 'today';
  } else if (isThisWeek(date)) {
    return 'this week';
  } else if (isThisMonth(date)) {
    return 'this month';
  } else if (isThisYear(date)) {
    return 'this year';
  } else {
    return format(date, 'dd MMM, yyyy');
  }
};

const processNotifications = (
  notifications: Notification[]
): ProcessedNotification[] => {
  const processedTime: ProcessedTime = {
    today: [],
    thisWeek: [],
    thisMonth: [],
    thisYear: [],
    older: [],
  };

  notifications.forEach((notification) => {
    const timeAgo = getTimeAgo(notification.time);

    switch (timeAgo) {
      case 'today':
        processedTime.today.push(notification);
        break;
      case 'this week':
        processedTime.thisWeek.push(notification);
        break;
      case 'this month':
        processedTime.thisMonth.push(notification);
        break;
      case 'this year':
        processedTime.thisYear.push(notification);
        break;
      default:
        processedTime.older.push(notification);
    }
  });
  const result = [
    { tag: 'Today', notifications: processedTime.today },
    { tag: 'This Week', notifications: processedTime.thisWeek },
    { tag: 'This Month', notifications: processedTime.thisMonth },
    { tag: 'This Year', notifications: processedTime.thisYear },
    { tag: 'Old', notifications: processedTime.older },
  ];

  return result;
};

const processedNotification = processNotifications(notificationData);
console.log(processedNotification);

const page = () => {
  return (
    <div className='container px-5'>
      {/* half card */}
      <div className='w-full bg-white p-5'>
        <Text decoration={'h4'} tag={'h4'}>
          Notification
        </Text>
        <Tab.Group>
          <Tab.List className={'my-4'}>
            <Tab as={Fragment}>
              {({ selected }) => (
                <Button
                  className='mr-4'
                  intent={selected ? 'primary' : 'secondary'}
                >
                  All
                </Button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <Button intent={selected ? 'primary' : 'secondary'}>
                  Unread
                </Button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className='h-screen w-full bg-red-400'>
                {processedNotification.map((item, index) => {
                  return (
                    <div key={index}>
                      <Text>{item.tag}</Text>
                      {item.notifications.map((item, index) => {
                        return (
                          <div key={item.id}>
                            <NotificationCard notification={item} />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default page;

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
}) => {
  const timeAgo = getTimeAgo(notification.time);

  return (
    <div>
      {/* <img src={notification.image} alt={`User ${notification.id}`} /> */}
      <Image
        width={100}
        height={100}
        alt='notification icon'
        src={notification.image}
      />
      <h3>{notification.message}</h3>
      <p>{timeAgo}</p>
      {/* Add other elements as needed */}
    </div>
  );
};
