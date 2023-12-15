'use client';
import { frontendLinks } from '@/config/common/app-link';
import { Avatar } from '@/ui/Avatar';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { ClassPropertiess } from '@/ui/common/interface';
import Image from 'next/image';
import { BsChevronCompactDown } from 'react-icons/bs';
import { GoBell } from 'react-icons/go';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { TbMessageDots } from 'react-icons/tb';
import DropDownBtn from './DropDownBtn';
import ListItemBtn from './ListItemBtn';

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
  { tag: 'Home', link: '', child: true },
  { tag: 'worktite gallary', link: '', child: false },
  { tag: 'about us', link: '', child: false },
  { tag: 'services', link: '', child: false },
  { tag: 'contact', link: '', child: false },
  { tag: 'FAQ', link: '', child: false },
];

export const NavBar = ({}: Props) => {
  const logoProps = {
    src: '/worktite_logo.png',
    width: 70,
    height: 20,
  };
  return (
    <div className={NavBarCss.containerClass}>
      <div className='items-center'>
        <Image {...logoProps} alt='Worktite company logo' />
      </div>
      <div className={NavBarCss.containerListItemClass}>
        {items.map((item, index) => {
          if (item.tag == 'Home') {
            return <ListItemBtn key={index} />;
          }
          return (
            <Button
              key={index}
              intent={'tertiary'}
              className={NavBarCss.listItemBtnClass}
            >
              {item.tag}
              {item.child && <BsChevronCompactDown />}
            </Button>
          );
        })}
      </div>
      <div className={NavBarCss.otherNavItemClass}>
        <div className={NavBarCss.otherNavItemClass + ' text-xl'}>
          {/* <GoBell /> */}
          <NotificationDropDown />
          <TbMessageDots />
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

  return (
    <DropDownBtn menuButton={menuBtn}>
      <Text tag={'h5'}>Notification</Text>
    </DropDownBtn>
  );
};
