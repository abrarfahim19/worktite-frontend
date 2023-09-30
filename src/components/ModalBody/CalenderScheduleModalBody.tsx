'use client';
import { Button } from '@/ui/Button';
import { Dialog } from '@headlessui/react';
import { DatePicker } from '../DatePicker';
export interface IModalBody {
  closeModal: () => void;
}
const CalendarScheduleModalBody = ({ closeModal }: IModalBody) => {
  return (
    <div className=''>
      <Dialog.Title
        as='h3'
        className='text-lg font-medium leading-6 text-gray-900'
      >
        Set Meeting Schedule
      </Dialog.Title>
      <div className='mt-2'>
        <DatePicker />
      </div>

      <div className='mt-4'>
        <Button
          onClick={() => {
            console.log('This is Modal Closed call');
            closeModal();
          }}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default CalendarScheduleModalBody;
