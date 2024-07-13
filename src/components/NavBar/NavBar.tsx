'use client';
import {
  apiRoutes,
  getFirstCharCapitalized,
  notificationData,
} from '@/config/common'; // Import your notification data
import { frontendLinks } from '@/config/common/appLink';
import { IUser } from '@/config/common/interfaces';
import { processNotifications } from '@/config/libs/notification';
import useDataFetch from '@/hooks/useDataFetch';
import { logout } from '@/lib/authLib';
import { Icons } from '@/lib/utils';
import { Button } from '@/ui/Button';
import { ClassPropertiess } from '@/ui/common/interface';
import { Text } from '@/ui/Text';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactElement } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { TbMessageDots } from 'react-icons/tb';
import { NotificationCard } from '../NotificationCard';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
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
  { tag: 'About Us', link: '/about', child: false },
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
          <div className='flex'>
            <NotificationDropDown />
          </div>
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
  // const menuBtn = (
  //   <Avatar
  //     decoration={'ring'}
  //     imageUrl='https://randomuser.me/api/portraits/men/9.jpg'
  //   />
  // );
  const router = useRouter();
  const { data: completeUserData } = useDataFetch<IUser>(
    apiRoutes.AUTH.USER_PROFILE({
      expand: 'user_details,user_details.profile_picture',
    })
  );
  console.log('Data is: ', completeUserData);
  return (
    <div>
      {completeUserData ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className='border-2 border-ring'>
              <AvatarImage
                src={completeUserData?.user_details?.profile_picture?.image}
              />
              <AvatarFallback>
                {getFirstCharCapitalized(
                  completeUserData?.user_details?.name || 'User'
                )}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href={frontendLinks.PROTECTED.PROFILE}>Profile </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href={frontendLinks.PROTECTED.SETTINGS}>Settings</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={async () => {
                  await logout();
                  router.push('/login');
                }}
              >
                Logout
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={frontendLinks.LOGIN}>
          <Button>Login</Button>
        </Link>
      )}
    </div>
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
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='self-center'>
          <Icons.bell className='h-5 w-5' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='p-4'>
        <Tabs defaultValue='unread'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='unread'>Unread</TabsTrigger>
            <TabsTrigger value='all'>All</TabsTrigger>
          </TabsList>
          <TabsContent value='unread'>
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
          </TabsContent>

          <TabsContent value='all'>
            <div className='mx-auto max-w-md'>
              {processedNotification.map((item, index) => {
                if (item.notifications.length > 0)
                  return (
                    <div key={index}>
                      <Text className='font-semibold'>{item.tag}</Text>
                      {item.notifications.map((itemNotification, index) => {
                        return (
                          <div key={itemNotification.id}>
                            <NotificationCard notification={itemNotification} />
                          </div>
                        );
                      })}
                    </div>
                  );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
