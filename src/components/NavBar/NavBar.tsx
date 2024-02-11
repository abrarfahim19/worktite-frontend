'use client';
import { notificationData } from '@/config/common'; // Import your notification data
import { frontendLinks } from '@/config/common/app-link';
import { processNotifications } from '@/config/libs/notification';
import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { ClassPropertiess } from '@/ui/common/interface';
import { Menu, Tab, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, ReactElement } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { TbMessageDots } from 'react-icons/tb';
import { NotificationCard } from '../NotificationCard';
import DropDownBtn from './DropDownBtn';

const DropDownCss: ClassPropertiess = {
  cloneElementClass: (active: boolean, child: ReactElement) =>
    `${
      active ? 'bg-brand text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md text-sm ${
      child?.props?.className && child.props?.className
    } `,
  menuItemsClass:
    'absolute mt-2 z-50 md:w-[500px] w-[350px] md:px-4 py-4 md:right-0 -right-28 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  menuDivClass: 'relative inline-block',
};

const transitionProps = {
  enter: 'transition ease-out duration-100',
  enterFrom: 'transform opacity-0 scale-95',
  enterTo: 'transform opacity-100 scale-100',
  leave: 'transition ease-in duration-75',
  leaveFrom: 'transform opacity-100 scale-100',
  leaveTo: 'transform opacity-0 scale-95',
};
type Props = {};
const NavBarCss: ClassPropertiess = {
  containerClass:
    'flex h-10 items-center justify-between container mx-auto py-10 ',
  containerListItemClass: 'hidden gap-4  md:flex md:flex-row',
  listItemBtnClass:
    'flex  items-center gap-3 overflow-hidden text-ellipsis whitespace-nowrap text-left text-lg text-brand',
  otherNavItemClass: 'flex items-center gap-4 ',
  listItemHrLineClass: 'h-px border-0 bg-gray-200 ',
  dropdownDivClass: 'items-center sm:block md:hidden',
};

// TODO: move route link to common component
const items = [
  { tag: 'Home', link: '/', child: false },
  { tag: 'Simple', link: '/simpleproject', child: false },
  { tag: 'Complex', link: '/complexproject', child: false },
  { tag: 'Gallery', link: '/gallery', child: false },
  { tag: 'About', link: '/about', child: false },
  { tag: 'services', link: '/services', child: false },
];

export const NavBar = ({}: Props) => {
  const logoProps = {
    src: '/Furnicove.png',
    width: 150,
    height: 80,
  };
  const pathName = usePathname();
  return (
    <div className={NavBarCss.containerClass}>
      <div className='items-center'>
        <Image {...logoProps} alt='Worktite company logo' />
      </div>
      <div className={NavBarCss.containerListItemClass}>
        {items.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <Button
                intent={pathName === item.link ? 'active' : 'tertiary'}
                className={''}
              >
                {item.tag}
                {item.child && <BsChevronCompactDown />}
              </Button>
            </Link>
          );
        })}
      </div>
      <div className={NavBarCss.otherNavItemClass}>
        <div className={NavBarCss.otherNavItemClass + ' text-xl'}>
          {/* <GoBell /> */}
          <NotificationDropDown />
          <Link href={'/message'}>
            <TbMessageDots />
          </Link>
          <NavProfileDropDown />
        </div>
        <NavHiddenDropDown />
      </div>
    </div>
  );
};
const CommonBtn = ({ text, href }: { text: string; href: string }) => {
  return (
    <Button as='link' href={href} size='normal' intent='normal'>
      {text}
    </Button>
  );
};

const NavProfileDropDown = () => {
  const menuBtn = (
    <Avatar
      decoration={'ring'}
      imageUrl='https://randomuser.me/api/portraits/men/9.jpg'
    />
  );

  return (
    <DropDownBtn menuButton={menuBtn}>
      <CommonBtn text='profile' href={frontendLinks.PROTECTED.PROFILE} />
      <hr className={NavBarCss.listItemHrLineClass} />
      <CommonBtn text='Dashboard' href={frontendLinks.PRIVATE.DASHBOARD} />
      <hr className={NavBarCss.listItemHrLineClass} />
      <CommonBtn text='Orders' href={frontendLinks.PRIVATE.DASHBOARD} />
      <hr className={NavBarCss.listItemHrLineClass} />
      <CommonBtn text='Logout' href={frontendLinks.LOGOUT} />
    </DropDownBtn>
  );
};

const NavHiddenDropDown = () => {
  return (
    <DropDownBtn
      className={NavBarCss.dropdownDivClass}
      menuButton={<HiOutlineMenuAlt3 />}
    >
      {items.map((item) => (
        <CommonBtn key={item.tag} text={item.tag} href={item.link} />
      ))}
    </DropDownBtn>
  );
};
const NotificationDropDown = () => {
  const menuBtn = <GoBell />;
  // Function to get unread notifications
  const processedNotification = processNotifications(notificationData);
  const getUnreadNotifications = () => {
    return notificationData.filter((notification) => !notification.read);
  };

  const unreadNotifications = getUnreadNotifications();

  return (
    <Menu as='div' className={DropDownCss.menuDivClass}>
      <div>
        <Menu.Button as='div'>
          <GoBell />
        </Menu.Button>
      </div>
      <Transition as={Fragment}>
        <Menu.Items className={DropDownCss.menuItemsClass}>
          <div className={`px-1 py-1 `}>
            <div className='mx-auto max-w-xl rounded-md bg-white p-2 md:p-5'>
              <div className='flex items-center justify-between'>
                <Text decoration={'h4'} tag={'h4'}>
                  Notification
                </Text>
                <Link href={'/notification'}>
                  <Button intent={'secondary'}>see all</Button>
                </Link>
              </div>
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
                              {item.notifications.map(
                                (itemNotification, index) => {
                                  return (
                                    <div key={itemNotification.id}>
                                      <NotificationCard
                                        notification={itemNotification}
                                      />
                                    </div>
                                  );
                                }
                              )}
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
                              {item.notifications.map(
                                (itemNotification, index) => {
                                  if (!itemNotification.read)
                                    return (
                                      <div key={itemNotification.id}>
                                        <NotificationCard
                                          notification={itemNotification}
                                        />
                                      </div>
                                    );
                                }
                              )}
                            </div>
                          );
                      })}
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
