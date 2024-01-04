'use client';
import { notificationData } from '@/config/common'; // Import your notification data
import { frontendLinks } from '@/config/common/app-link';
import { processNotifications } from '@/config/libs/notification';
import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { ClassPropertiess } from '@/ui/common/interface';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsChevronCompactDown } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { TbMessageDots } from 'react-icons/tb';
import { NotificationCard } from '../NotificationCard';
import DropDownBtn from './DropDownBtn';

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
  { tag: 'About us', link: '/about', child: false },
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
    <DropDownBtn menuButton={menuBtn}>
      <div className='w-[500px]'>
        <Text tag={'h5'}>Notification</Text>
        <div className='mt-2'>
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
      </div>
    </DropDownBtn>
  );
};
