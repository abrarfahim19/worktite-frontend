import React from 'react';
import { Text } from '@/ui/Text';
import { cva, VariantProps } from 'class-variance-authority';
import { CustomInput } from '@/ui/Dropdown';

const markCard = cva('', {
  variants: {
    intent: {
      primary: [
        'hover:backdrop-blur-md hover:bg-white/30 p-6 border border-brand hover:border-white/30',
      ],
      secondary: [
        'hover:backdrop-blur-md hover:bg-white/30 p-6 border border-brand hover:border-white/30 flex flex-grow flex-col justify-center items-center',
      ],
    },
    orientation: {
      center: [''],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
});

const markCardSerial = cva('', {
  variants: {
    color: {
      primary: ['text-brand'],
      secondary: ['mt-14'],
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

interface CustomProps {
  serial?: number;
  title: string;
  description: string;
}

export interface MarkCardProps
  extends CustomProps,
    VariantProps<typeof markCard>,
    VariantProps<typeof markCardSerial> {}

const MarkCard: React.FC<MarkCardProps> = ({
  serial,
  title,
  description,
  intent,
  color,
}) => {
  return (
    <div className={markCard({ intent })}>
      <Text tag='p' decoration='h3' className={markCardSerial({ color })}>
        {serial && serial.toString().padStart(2, '0')}
      </Text>
      <Text tag='p' decoration='p' className='mb-4 mt-8 font-bold'>
        {title}
      </Text>
      <Text tag='p' decoration='span' className='text-center'>
        {description}
      </Text>
    </div>
  );
};

export default MarkCard;
