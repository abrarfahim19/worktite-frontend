'use client';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { Modal } from '@/ui/Modal';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { BsCalendar2Day } from 'react-icons/bs';
import CalendarScheduleModalBody from './CalenderScheduleModalBody';

export interface IModalBody {
  closeModal: () => void;
}

const AppointmentModalBody = ({ closeModal }: IModalBody) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);

  function closeCalenderModal() {
    setIsCalenderOpen(false);
  }

  function openCalenderModal() {
    setIsCalenderOpen(true);
  }
  return (
    <>
      <Dialog.Title
        as='h3'
        className='text-center text-lg font-medium leading-6 text-gray-900'
      >
        Make an Appointment
      </Dialog.Title>
      <div className='mt-2'>
        <Input className='mb-4' label='Name' placeholder='Mark Jhon' />
        <Input className='mb-4' label='E-mail' placeholder='mark@gmail.com' />
        <Input
          className='mb-4'
          icon={<BsCalendar2Day />}
          onClick={openCalenderModal}
          label='Date and Time'
          placeholder='5th Nov 2022, 08:00 am to 11:00 am'
        />
        <Input
          label='Message'
          placeholder='Add description'
          multiline={true}
          className='h-32'
        />
      </div>

      <div className='mt-4'>
        <Button className='w-full' onClick={() => closeModal()}>
          Send
        </Button>
      </div>
      <Modal
        closeModal={closeCalenderModal}
        isOpen={isCalenderOpen}
        content={<CalendarScheduleModalBody closeModal={closeCalenderModal} />}
        defaultCancel={false}
      />
    </>
  );
};

export default AppointmentModalBody;

// 1. Close Modal from modal functionality => This is to be found within Modal
// 2. Close modal withing the modal => This is to be found within Modal
