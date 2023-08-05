'use client';
import { Button } from '@/ui/Button';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { Avatar } from '@/ui/Avatar';
import { Input } from '@/ui/Input';
import { BsCalendarDay } from 'react-icons/bs';
import { Text } from '@/ui/Text';
import { Modal } from '@/ui/Modal';
import TestModalBody from '@/components/Modal/TestModalBody';
import React, { useState } from 'react';
import { Dropdown } from '@/ui/Dropdown';
// import { ColumnDef } from '@tanstack/react-table';

const intents = [undefined, 'primary', 'secondary', 'tartiary'] as const;
const sizes = [undefined, 'medium', 'small', 'large'] as const;

// type Person = {
//   firstName: string;
//   lastName: string;
//   age: number;
//   visits: number;
//   status: string;
//   progress: number;
// };
//
// const defaultData: Person[] = [
//   {
//     firstName: 'tanner',
//     lastName: 'linsley',
//     age: 24,
//     visits: 100,
//     status: 'In Relationship',
//     progress: 50,
//   },
//   {
//     firstName: 'tandy',
//     lastName: 'miller',
//     age: 40,
//     visits: 40,
//     status: 'Single',
//     progress: 80,
//   },
//   {
//     firstName: 'joe',
//     lastName: 'dirte',
//     age: 45,
//     visits: 20,
//     status: 'Complicated',
//     progress: 10,
//   },
// ];
//
// const defaultColumns: ColumnDef<Person>[] = [
//   {
//     accessorKey: 'firstName',
//     cell: (info) => info.getValue(),
//     // footer: (props) => props.column.id,
//   },
//   {
//     accessorFn: (row) => row.lastName,
//     id: 'lastName',
//     cell: (info) => info.getValue(),
//     header: () => <span>Last Name</span>,
//     // footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'age',
//     header: () => 'Age',
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'visits',
//     header: () => <span>Visits</span>,
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'status',
//     header: 'Status',
//     footer: (props) => props.column.id,
//   },
//   {
//     accessorKey: 'progress',
//     header: 'Profile Progress',
//     footer: (props) => props.column.id,
//   },
// ];
export default function Home() {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className=''>
      <div>
        <Dropdown
          hover={true}
          menuButton={

          <Button
            intent={'secondary'}
            className='flex flex-row items-center gap-3 text-xl text-brand'
          >
            <IoArrowForwardCircleOutline className='text-4xl' />
           Complex Project</Button>
        }
        {/* <Dropdown
          className='flex items-center justify-center gap-x-2'
          menuText='Menu'
          icon={<BsCalendarDay />}
        >
          <button className='group flex w-full items-center rounded-md px-2 py-2 text-sm'>
            Account{' '}
          </button>
          <button className='group flex w-full items-center rounded-md px-2 py-2 text-sm'>
            Account Settings
          </button>
          <button className='group flex w-full items-center rounded-md px-2 py-2 text-sm'>
            Account{' '}
          </button>
        </Dropdown>
      </div>
      <div></div>
      <table className='relative h-max w-max self-center justify-self-center [&_:where(th,td)]:p-2'>
        <thead>
          <tr>
            <th></th>
            {intents.map((intent: any, index: number) => (
              <th key={index} scope='col'>
                {intent || 'default'}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((size, index) => (
            <tr key={index}>
              <th scope='row'>{size || 'default'}</th>
              {intents.map((intent: any, index: number) => (
                <td key={index} scope='col'>
                  <Button {...(intent && { intent })} {...(size && { size })}>
                    {intent || 'default'} button
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Button
        intent={'tertiary'}
        className='flex flex-row items-center gap-3 text-xl text-brand'
      >
        <IoArrowForwardCircleOutline className='text-4xl' />
        Complex Project
      </Button>
      <Avatar
        imageUrl={'https://randomuser.me/api/portraits/men/9.jpg'}
        size={'medium'}
        decoration={'ring'}
      />
      <div className='m-4'>
        <Input
          icon={<BsCalendarDay />}
          lClass='primary'
          label='Phone Number'
          placeholder='phone number 0122'
        />
      </div>
      <div className='m-4'>
        {/*<TextArea*/}
        {/*  lClass='primary'*/}
        {/*  label='Description'*/}
        {/*  placeholder='Add your description'*/}
        {/*  rows={4}*/}
        {/*/>*/}
      </div>
      <div className='m-4'>
        <Text tag='p' decoration='h1' className='text-red-400'>
          hellow
        </Text>
      </div>
      <Button intent={'secondary'} size={'medium'} onClick={openModal}>
        This is button
      </Button>
      <Modal
        defaultCancel={true}
        content={<TestModalBody />}
        closeModal={closeModal}
        isOpen={isOpen}
      />
      <div>
        {/*<Table data={defaultData} columns={defaultColumns} sorted={false}/>*/}
        <Table data={defaultData} columns={defaultColumns} sorted={false} />
      </div>
    </div>
  );
}
