import { Menu, Transition } from '@headlessui/react';
import { cva, VariantProps } from 'class-variance-authority';
import React, {
  Children,
  cloneElement,
  Fragment,
  PropsWithChildren,
} from 'react';

const VDropdown = cva('', {
  variants: {
    variant: {
      primary: 'focus:outline-none relative',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface CustomInput {
  /**label for input field */
  menuButton?: JSX.Element;
  hover?: boolean;
}

export interface DropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    CustomInput,
    VariantProps<typeof VDropdown> {}

export const Dropdown: React.FC<DropdownProps> = ({
  menuButton,
  className,
  children,
  variant,
  hover,
  ...props
}) => {
  const buttonRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const timeoutDuration = 75;
  let timeout: any;

  // @ts-ignore
  const openMenu = () => buttonRef?.current.click();
  const closeMenu = () =>
    // @ts-ignore
    dropdownRef?.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );
  // @ts-ignore
  const onMouseEnter = (closed = false) => {
    clearTimeout(timeout);
    closed && openMenu();
  };
  // @ts-ignore
  const onMouseLeave = (open: boolean) => {
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration));
  };
  return (
    <Menu>
      {({ open }: { open: boolean }) => (
        <>
          <div
            className={VDropdown({ variant, className })}
            onClick={openMenu}
            onMouseEnter={() => hover && onMouseEnter(!open)}
            onMouseLeave={() => hover && onMouseLeave(open)}
          >
            <Menu.Button
              as='div'
              ref={buttonRef}
              className='focus:outline-none'
            >
              {menuButton}
            </Menu.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items
                ref={dropdownRef}
                onMouseEnter={() => hover && onMouseEnter()}
                onMouseLeave={() => hover && onMouseLeave(open)}
                className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              >
                <div className='px-1 py-1'>
                  {Children.map(children, (child, index) => {
                    return (
                      <Menu.Item key={index}>
                        {({ active }) => {
                          let item = child as React.ReactElement<
                            PropsWithChildren<HTMLButtonElement>
                          >;
                          const className = `${
                            active ? 'bg-brand text-white' : 'text-gray-900'
                          } ${item.props.className}`;
                          item = cloneElement(item, {
                            ...item.props,
                            className,
                          });

                          return item;
                        }}
                      </Menu.Item>
                    );
                  })}
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </>
      )}
    </Menu>
  );
};
