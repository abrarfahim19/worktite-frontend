import { ClientDocument } from '@/app/projectpage/interfaces';
import Loading from '@/components/Loading';
import SvgIcon from '@/components/common/SvgIcon';
import { Text } from '@/ui/Text';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiDownload } from 'react-icons/hi';
import { SiSketchup } from 'react-icons/si';
import pdf from '../../../public/Images/svg/icon/pdf.svg';

interface IProps {
  title: string;
  data: ClientDocument[];
  [key: string]: any;
}

const Documents: React.FC<IProps> = ({ title, data, ...props }) => {
  return (
    <>
      <Text tag='p' decoration='p' className='font-semibold'>
        {title}
      </Text>
      <div className='mt-6 w-full'>
        {data?.map((el, index) => (
          <DocumentCard data={el} key={index} index={index} />
        ))}
        {props?.isLoading && <Loading />}
      </div>
    </>
  );
};

export default Documents;

enum FileExt {
  PDF = 'pdf',
  DOC = 'doc',
}

const DocumentCard = ({
  data,
  index,
}: {
  data: ClientDocument;
  index: string | number;
}) => {
  const router = useRouter();
  const fileExt = data?.file?.file_name?.split('.')?.slice(-1)[0];

  const generatePdfIcon = React.useMemo(() => {
    switch (fileExt) {
      case FileExt.PDF:
        return <SvgIcon icon={pdf} />;
      case FileExt.DOC:
        return <SvgIcon icon={pdf} />;
      default:
        return <SiSketchup className='h-20 w-20 p-1 text-3xl' />;
    }
  }, []);
  return (
    <div
      className={`flex items-center justify-between ${
        index !== 0 && 'border-t-2'
      }`}
    >
      <div className='flex items-center justify-between gap-x-1'>
        {generatePdfIcon}
        <Text tag='p' decoration='p'>
          {data?.file?.file_name}
        </Text>
      </div>
      <Link
        href={data?.file?.file}
        target='_blank'
        rel='noopener noreferrer'
        locale={false}
        download
      >
        {/* <a download={data?.file?.file_name}> */}
        <HiDownload className='inline-block cursor-pointer' />
        {/* </a> */}
      </Link>
    </div>
  );
};

// const generatePdfIcon = () => {};
