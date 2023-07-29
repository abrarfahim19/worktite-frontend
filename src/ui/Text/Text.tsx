import { VariantProps, cva } from 'class-variance-authority';
import React, { Component } from 'react';

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
      p: 'text-md',
      span: 'text-sm',
    },
  },
  defaultVariants: {
    decoration: 'p',
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
  tag,
  ...props
}) => {
  const component = React.createElement(
    VTextVarinat({ tag }),
    { ...props, className: VTextType({ decoration, className }) },
    children
  );
  return component;
};
