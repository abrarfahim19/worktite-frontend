import React from 'react';
import { Text } from '@/ui/Text';
import { Table } from '@/ui/Table';
import { CellContext, createColumnHelper } from '@tanstack/table-core';
import { Button } from '@/ui/Button';
import invoice from '../../../public/Images/svg/icon/invoice.svg';
import SvgIcon from '@/components/common/SvgIcon';
import { HiDownload } from 'react-icons/hi';

enum Status {
  PAID,
  UNPAID,
}

enum PaymentMethod {
  CASH_ON_HAND,
  ONLINE,
}

type InvoiceInfo = {
  invoice_id: string;
  status: Status;
  payment_method: PaymentMethod;
  date: string;
};

const projectInfos: InvoiceInfo[] = [
  {
    invoice_id: '1',
    status: Status.PAID,
    payment_method: PaymentMethod.ONLINE,
    date: '12-02-2022',
  },
  {
    invoice_id: '1',
    status: Status.UNPAID,
    payment_method: PaymentMethod.ONLINE,
    date: '12-02-2022',
  },
  {
    invoice_id: '1',
    status: Status.PAID,
    payment_method: PaymentMethod.CASH_ON_HAND,
    date: '12-02-2022',
  },
  {
    invoice_id: '1',
    status: Status.PAID,
    payment_method: PaymentMethod.ONLINE,
    date: '12-02-2022',
  },
];

const EditionalComponent = ({
  info,
}: {
  info: CellContext<InvoiceInfo, string>;
}) => {
  return (
    <span className='flex items-center justify-center gap-x-2'>
      <SvgIcon icon={invoice} />
      <Text>{info.getValue()}</Text>
    </span>
  );
};

const DownloadComponent = ({
  info,
}: {
  info: CellContext<InvoiceInfo, string>;
}) => {
  return (
    <span className='flex items-center justify-center gap-x-2'>
      <HiDownload />
    </span>
  );
};

const column = createColumnHelper<InvoiceInfo>();

const columnsProjectInfo = [
  column.accessor('invoice_id', {
    header: () => (
      <span className='inline-block w-full text-left'>Product</span>
    ),
    cell: (info) => <EditionalComponent info={info} />,
    footer: (info) => info.column.id,
  }),
  column.accessor((row) => row.status, {
    id: 'status',
    cell: (info) => (
      <span>{info.getValue() == Status.PAID ? 'Paid' : 'Unpaid'}</span>
    ),
    header: () => <span>Status</span>,
    footer: (info) => info.column.id,
  }),
  column.accessor('payment_method', {
    header: () => 'Payment method',
    cell: (info) => (
      <span>
        {info.getValue() == PaymentMethod.CASH_ON_HAND
          ? 'Cash on hand'
          : 'online'}
      </span>
    ),
    footer: (info) => info.column.id,
  }),
  column.accessor('date', {
    header: () => <span>Date</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  column.accessor('invoice_id', {
    header: () => <span>Download</span>,
    cell: (info) => <DownloadComponent info={info} />,
    footer: (info) => info.column.id,
  }),
  column.accessor('invoice_id', {
    header: () => <span></span>,
    cell: (info) => (
      <Button onClick={() => console.log(info.renderValue())}>Pay now</Button>
    ),
    footer: (info) => info.column.id,
  }),
];

const Invoice = () => {
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

Invoice.propTypes = {};

export default Invoice;
