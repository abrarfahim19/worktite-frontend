import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const button = cva('button', {
  variants: {
    intent: {
      primary: ['rounded text-white bg-brand hover:opacity-80'],
      secondary: [
        'bg-white',
        'text-brand',
        'hover:opacity-80',
        'font-normal',
        'rounded',
      ],
      tertiary: [
        'bg-transparent',
        'pl-0',
        'text-black font-raleway',
        'active:text-brand',
        'before:block before:absolute before:-inset-1 before:border-b-2 before:border-transparent active:before:border-brand before:w-1/2 relative inline-block',
      ],
      normal: ['flex w-full items-center rounded-md px-2 py-2 text-sm'],
      disabled: ['bg-gray-100 rounded text-gray-400'],
      enabled: ['bg-gray-100 rounded'],
    },
    size: {
      small: ['py-1', 'text-sm', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
      large: ['text-base', 'py-4', 'px-4'],
      normal: [' px-2 py-2 text-sm'],
    },
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;
