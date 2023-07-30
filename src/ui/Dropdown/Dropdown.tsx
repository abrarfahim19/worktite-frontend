import { Menu, Transition } from '@headlessui/react';
import { VariantProps, cva } from 'class-variance-authority';
import React, {
  Fragment,
  Children,
  PropsWithChildren,
  cloneElement,
} from 'react';

const VDropdown = cva('', {
  variants: {
    variant: {
      primary:
        'inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface CustomInput {
  /**label for input field */
  menuText: string;
  icon?: JSX.Element;
}

export interface DropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    CustomInput,
    VariantProps<typeof VDropdown> {}

export const Dropdown: React.FC<DropdownProps> = ({
  menuText,
  icon,
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <Menu>
      <Menu.Button className={VDropdown({ variant, className })}>
        {menuText}
        {icon}
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
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
    </Menu>
  );
};
