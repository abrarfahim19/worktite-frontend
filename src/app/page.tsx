'use client';
import AppointmentModalBody from '@/components/ModalBody/AppointmentModalBody';
import { Button } from '@/ui/Button';
import { Modal } from '@/ui/Modal';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const toastify = () => toast('This is Toast');

  return (
    <div className='p-5'>
      <Button onClick={openModal}>Modal</Button>
      <Modal
        closeModal={closeModal}
        content={<AppointmentModalBody closeModal={closeModal} />}
        isOpen={isOpen}
        defaultCancel={true}
      />
      <Button onClick={toastify}>Toast</Button>
    </div>
  );
}
