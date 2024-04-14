'use client';
import { Button } from '@/ui/Button';
import { Input } from '@/ui/Input';
import { Modal } from '@/ui/Modal';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { BsCalendar2Day } from 'react-icons/bs';
import CalendarScheduleModalBody from './CalenderScheduleModalBody';
import { APPOINTMENT_TYPE } from '@/config/common/AppEnums';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'name must be at least 2 characters and less than 100 characters.',
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  appointment_at: z.string().datetime(),
  message: z.string(),
  project_type: z.number(),
});

export interface IModalBody {
  closeModal: () => void;
  appointmentType: APPOINTMENT_TYPE;
}

const AppointmentModalBody = ({ closeModal, appointmentType }: IModalBody) => {
  const [isCalenderOpen, setIsCalenderOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      project_type: appointmentType,
    },
  });
  function closeCalenderModal() {
    setIsCalenderOpen(false);
  }

  function openCalenderModal() {
    setIsCalenderOpen(true);
  }
  function onSubmit(data: any) {
    console.log(data);
  }
  return (
    <>
      <Dialog.Title
        as='h3'
        className='text-center text-lg font-medium leading-6 text-gray-900'
      >
        Make an Appointment
      </Dialog.Title>
      <form onSubmit={form.handleSubmit(onSubmit)} className='mt-2'>
        <div>
          <Input
            className='mb-4'
            {...form.register('name')}
            label='Name'
            placeholder='Mark Jhon'
          />
          <Input
            className='mb-4'
            {...form.register('email')}
            label='E-mail'
            placeholder='mark@gmail.com'
          />
          <Input
            className='mb-4'
            icon={<BsCalendar2Day />}
            onClick={openCalenderModal}
            {...form.register('appointment_at')}
            label='Date and Time'
            placeholder='5th Nov 2022, 08:00 am to 11:00 am'
          />
          <Input
            label='Message'
            placeholder='Add description'
            {...form.register('message')}
            multiline={true}
            className='h-32'
          />
        </div>

        <div className='mt-4'>
          <Button className='w-full' type='submit'>
            Send
          </Button>
        </div>
      </form>
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
