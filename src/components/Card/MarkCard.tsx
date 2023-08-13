import React from 'react';
import { Text } from '@/ui/Text';

interface Props {
  serial?: number;
  title: string;
  description: string;
  orientation?: string;
}
const MarkCard: React.FC<Props> = ({ serial, title, description, orientation = 'center' }) => {
  return (
    <div className="hover:backdrop-blur-md hover:bg-white/30 p-6 border border-brand hover:border-inherit">
      <Text tag='p' decoration='h3' className='text-brand'>{serial && serial.toString().padStart(2, '0')}</Text>
      <Text tag='p' decoration='p' className='mt-8 mb-4 font-bold'>{title}</Text>
      <Text tag='p' decoration='span'>{description}</Text>
    </div>
  );
};

export default MarkCard;