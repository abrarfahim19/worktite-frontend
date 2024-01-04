import { ClassPropertiess } from '@/ui/common/interface';
import { Menu, Transition } from '@headlessui/react';
import { VariantProps, cva } from 'class-variance-authority';
import React, { Children, Fragment, ReactElement } from 'react';

const DropDownCss: ClassPropertiess = {
  cloneElementClass: (active: boolean, child: ReactElement) =>
    `${
      active ? 'bg-brand text-white' : 'text-gray-900'
    } group flex w-full items-center rounded-md text-sm ${
      child?.props?.className && child.props?.className
    } `,
  menuItemsClass:
    'absolute z-50 w-[500px] mt-2 right-0 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  menuDivClass: 'relative inline-block text-left',
};

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
  divClass?: string;
}

export interface DropdownProps
  extends React.HTMLAttributes<HTMLElement>,
    CustomInput,
    VariantProps<typeof VDropdown> {}

const DropDownBtn: React.FC<DropdownProps> = ({
  menuButton,
  children,
  className,
  divClass,
}) => {
  const arrayChildren = Children.toArray(children);
  const transitionProps = {
    enter: 'transition ease-out duration-100',
    enterFrom: 'transform opacity-0 scale-95',
    enterTo: 'transform opacity-100 scale-100',
    leave: 'transition ease-in duration-75',
    leaveFrom: 'transform opacity-100 scale-100',
    leaveTo: 'transform opacity-0 scale-95',
  };
  return (
    <Menu as='div' className={DropDownCss.menuDivClass}>
      <div>
        <Menu.Button as='div' className={className}>
          {menuButton && menuButton}
        </Menu.Button>
      </div>
      <Transition as={Fragment} {...transitionProps}>
        <Menu.Items className={DropDownCss.menuItemsClass + divClass}>
          <div className={`px-1 py-1 `}>
            {Children.map(arrayChildren, (child, index) => {
              return <MenuItem key={index} child={child} />;
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownBtn;

const MenuItem = ({ child }: { child: ReactElement | any }) => {
  if (child.type.name === 'Button') {
    return (
      <Menu.Item>
        {({ active }) =>
          React.cloneElement(child, {
            ...child?.props,
            className: DropDownCss.cloneElementClass(active),
          })
        }
      </Menu.Item>
    );
  }
  return child;
};
