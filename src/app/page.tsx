'use client';
import { Button } from '@/ui/Button';
import { Text } from '@/ui/Text';
import { Modal } from '@/ui/Modal';
import TestModalBody from '@/components/Modal/TestModalBody';
import React, { useState } from 'react';
import { Table } from '@/ui/Table';
import { ColumnDef } from '@tanstack/react-table';
import { TreeCard } from '@/components/Card';

const intents = [undefined, 'primary', 'secondary', 'tartiary'] as const;
const sizes = [undefined, 'medium', 'small', 'large'] as const;

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
];

const defaultColumns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    cell: (info) => info.getValue(),
    // footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: 'lastName',
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    // footer: (props) => props.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'visits',
    header: () => <span>Visits</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    footer: (props) => props.column.id,
  },
];
export default function Home() {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className='p-5'>
      <TreeCard />
    </div>
  );
}
