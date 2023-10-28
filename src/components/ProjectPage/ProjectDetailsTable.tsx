import React from 'react';
import { Text } from '@/ui/Text';
import { Table } from '@/ui/Table';
import { CellContext, createColumnHelper } from '@tanstack/table-core';
import { Button } from '@/ui/Button';
import Image from 'next/image';

type Product = {
  image: string;
  categories: string;
};

type Price = {
  amount: number;
  type: string;
};

type ProjectInfo = {
  product: Product;
  acc_no: string;
  client: string;
  pricing: Price;
  order_date: string;
  message_link: string;
};

const projectInfos: ProjectInfo[] = [
  {
    product: {
      image: 'https://picsum.photos/80/80',
      categories: 'table',
    },
    acc_no: '#433',
    client: 'jane cooper',
    pricing: { amount: 15, type: 'hour' },
    order_date: '12-02-2022',
    message_link: ':hh',
  },
  {
    product: {
      image: 'https://picsum.photos/80/80',
      categories: 'table',
    },
    acc_no: '#433',
    client: 'jane cooper',
    pricing: { amount: 15, type: 'hour' },
    order_date: '12-02-2022',
    message_link: ':hh',
  },
  {
    product: {
      image: 'https://picsum.photos/80/80',
      categories: 'table',
    },
    acc_no: '#433',
    client: 'jane cooper',
    pricing: { amount: 15, type: 'hour' },
    order_date: '12-02-2022',
    message_link: ':hh',
  },
  {
    product: {
      image: 'https://picsum.photos/80/80',
      categories: 'table',
    },
    acc_no: '#433',
    client: 'jane cooper',
    pricing: { amount: 15, type: 'hour' },
    order_date: '12-02-2022',
    message_link: ':hh',
  },
];

const ImageInfoComponent = ({
  info,
}: {
  info: CellContext<ProjectInfo, Product>;
}) => {
  const data = info.getValue();
  return (
    <span className='flex items-center justify-center gap-x-2'>
      <Image
        src={data?.image}
        alt={''}
        className='h-full w-full rounded'
        height={80}
        width={80}
      />
      <div className='flex-col font-medium'>
        <Text tag='p' decoration='p' className='text-left font-semibold'>
          {data?.categories}
        </Text>
        <Text tag='p' decoration='secondary' className=' text-left'>
          {data?.categories}
        </Text>
      </div>
    </span>
  );
};
const PricingComponent = ({
  info,
}: {
  info: CellContext<ProjectInfo, Price>;
}) => {
  const data = info.getValue();
  return (
    <span className='flex items-center justify-center'>
      {data?.type} {data?.amount}
    </span>
  );
};
const column = createColumnHelper<ProjectInfo>();

const columnsProjectInfo = [
  column.accessor('product', {
    header: () => (
      <span className='inline-block w-full text-left'>Product</span>
    ),
    cell: (info) => <ImageInfoComponent info={info} />,
    footer: (info) => info.column.id,
  }),
  column.accessor((row) => row.acc_no, {
    id: 'acc_no',
    cell: (info) => info.getValue(),
    header: () => <span>Acc no</span>,
    footer: (info) => info.column.id,
  }),
  column.accessor('client', {
    header: () => 'Client',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  column.accessor('pricing', {
    header: () => <span>Pricing</span>,
    cell: (info) => <PricingComponent info={info} />,
    footer: (info) => info.column.id,
  }),
  column.accessor('order_date', {
    header: () => <span>Status</span>,
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  column.accessor('message_link', {
    header: () => <span></span>,
    cell: (info) => (
      <Button
        as='link'
        href='message'
        onClick={() => console.log(info.renderValue())}
      >
        Message
      </Button>
    ),
    footer: (info) => info.column.id,
  }),
];

const ProjectDetailsTable = () => {
  return (
    <>
      <Text tag='p' decoration='p' className='font-semibold'>
        Project details
      </Text>
      <div className='w-full overflow-x-auto'>
        <Table
          thClassName='border-b'
          tRowClassName='border-b'
          className='w-full justify-self-center whitespace-nowrap text-center text-sm text-gray-500'
          columns={columnsProjectInfo}
          data={projectInfos}
        />
      </div>
    </>
  );
};

ProjectDetailsTable.propTypes = {};

export default ProjectDetailsTable;
