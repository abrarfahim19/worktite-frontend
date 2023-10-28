import React from 'react';
import { Text } from '@/ui/Text';
import SvgIcon from '@/components/common/SvgIcon';
import pdf from '../../../public/Images/svg/icon/pdf.svg';
import { SiSketchup } from 'react-icons/si';
import { HiDownload } from 'react-icons/hi';

type Data = {
  file: string;
  name: string;
};

interface IProps {
  title: string;
  data: Data[];
}

const Documents: React.FC<IProps> = ({ title, data }) => {
  return (
    <>
      <Text tag='p' decoration='p' className='font-semibold'>
        {title}
      </Text>
      <div className='mt-6 w-full'>
        {data?.map((el, index) => (
          <DocumentCard data={el} key={index} index={index} />
        ))}
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
  data: Data;
  index: string | number;
}) => {
  const fileExt = data?.file?.split('.')?.slice(-1)[0];

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
          {data?.name}
        </Text>
      </div>
      <HiDownload className='inline-block' />
    </div>
  );
};

// const generatePdfIcon = () => {};
