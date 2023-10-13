import { VariantProps, cva } from 'class-variance-authority';
import Image from 'next/image';
import React from 'react';

const avatar = cva('rounded-full p-1', {
  variants: {
    size: {
      small: [],
      medium: [],
      large: ['w-36'],
    },
    decoration: {
      ring: ['ring-1 ring-brand'],
      noRing: [],
    },
  },
});

export interface imageUrl {
  imageUrl: string;
}

export interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    imageUrl,
    VariantProps<typeof avatar> {}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  size,
  decoration,
  imageUrl,
  ...props
}) => {
  return (
    <button {...props}>
      <Image
        className={avatar({ size, decoration, className })}
        src={imageUrl}
        alt='avatar'
        width={size === 'large' ? 100 : size === 'medium' ? 80 : 50}
        height={100}
      />
    </button>
  );
};
