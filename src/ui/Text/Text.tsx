import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const VTextVarinat = cva('', {
  variants: {
    tag: {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
      h5: 'h5',
      h6: 'h6',
      p: 'p',
      span: 'span',
    },
  },
  defaultVariants: {
    tag: 'p',
  },
});

const VTextType = cva('', {
  variants: {
    decoration: {
      h1: 'text-5xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
      h6: 'h6',
      p: 'text-lg',
      secondary: 'text-md',
      tertiary: 'text-sm',
      span: 'text-sm text-[#504845]',
      big: 'text-6xl',
    },
    trunc: {
      ellipse: 'overflow-hidden text-ellipsis whitespace-nowrap',
      normal: '',
    },
  },
  defaultVariants: {
    decoration: 'p',
    trunc: 'normal',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof VTextVarinat>,
    VariantProps<typeof VTextType> {}

export const Text: React.FC<TextProps> = ({
  className,
  children,
  decoration,
  trunc,
  tag,
  ...props
}) => {
  return React.createElement(
    VTextVarinat({ tag }),
    { ...props, className: VTextType({ decoration, className, trunc }) },
    children
  );
};
