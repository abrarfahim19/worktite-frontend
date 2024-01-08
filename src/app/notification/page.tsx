'use client';
import { NotificationCard } from '@/components/NotificationCard';
import { notificationData } from '@/config/common';
import { processNotifications } from '@/config/libs/notification';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

const processedNotification = processNotifications(notificationData);
console.log(processedNotification);

const page = () => {
  return (
    <div className='container mx-auto px-5'>
      {/* half card */}
      <div className='mx-auto max-w-xl rounded-md bg-white p-5'>
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
              <div className='mx-auto max-w-md'>
                {processedNotification.map((item, index) => {
                  if (item.notifications.length > 0)
                    return (
                      <div key={index}>
                        <Text className='font-semibold'>{item.tag}</Text>
                        {item.notifications.map((itemNotification, index) => {
                          return (
                            <div key={itemNotification.id}>
                              <NotificationCard
                                notification={itemNotification}
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                })}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className='mx-auto max-w-md'>
                {processedNotification.map((item, index) => {
                  if (item.notifications.length > 0)
                    return (
                      <div key={index}>
                        <Text className='font-semibold'>{item.tag}</Text>
                        {item.notifications.map((itemNotification, index) => {
                          if (!itemNotification.read)
                            return (
                              <div key={itemNotification.id}>
                                <NotificationCard
                                  notification={itemNotification}
                                />
                              </div>
                            );
                        })}
                      </div>
                    );
                })}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default page;
