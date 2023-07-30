'use client';
import TestModalBody from '@/components/Modal/TestModalBody';
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
export interface IModal {
  opener: JSX.Element;
  content: JSX.Element;
  defaultCancel: boolean;
}
export function Modal({ opener, content, defaultCancel }: IModal) {
  let [isOpen, setIsOpen] = useState<boolean>(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Modal Opener with onClick  */}
      {React.cloneElement(opener, { onClick: openModal })}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  {defaultCancel && (
                    <button onClick={closeModal}>
                      <MdOutlineCancel className='flex-end absolute right-3 top-3  text-3xl' />
                    </button>
                  )}

                  {React.cloneElement(content, { closeModal })}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
