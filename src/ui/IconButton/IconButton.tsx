import React from 'react';
import { FaBeer } from 'react-icons/fa';
import { cva, type VariantProps } from 'class-variance-authority';

const iconButton = cva('button items-center', {
  variants: {
    iconPosition: {
      left: [
        'bg-transparent flex flex-row ',
        'pl-0',
        'text-black',
        'active:text-brand',
        'before:block before:absolute before:-inset-1 before:border-b-2 before:border-transparent active:before:border-brand before:w-1/2 relative inline-block',
      ],
      right: [
        'bg-transparent flex flex-row-reverse',
        'pl-0',
        'text-black',
        'active:text-brand',
        'before:block before:absolute before:-inset-1 before:border-b-2 before:border-transparent active:before:border-brand before:w-1/2 relative inline-block',
      ],
    },
    size: {
      small: ['py-1 gap-2', 'text-sm', 'px-2'],
      medium: ['text-base gap-4', 'py-2', 'px-4'],
      large: ['text-base gap-7', 'py-4', 'px-4'],
    },
  },
  defaultVariants: {
    iconPosition: 'left',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButton> {}

export const IconButton: React.FC<ButtonProps> = ({
  className,
  iconPosition,
  size,
  children,
  ...props
}) => (
  <button className={iconButton({ iconPosition, size, className })} {...props}>
    <FaBeer />
    {children}
  </button>
);
