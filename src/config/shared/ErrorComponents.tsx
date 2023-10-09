import React from 'react';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';
import { frontendLinks } from '@/config/common/app-link';

interface IErrorComponent {
  actionBtn?: React.ReactNode | null;
  title?: string;
  subTitle?: string;
}

export const ErrorComponent = ({
  actionBtn,
  title,
  subTitle,
}: IErrorComponent) => {
  return (
    <>
      <div className='h-screen flex-col items-center justify-center align-middle'>
        <Text tag='h1' decoration={'h1'}>
          {title}
        </Text>
        <Text tag='p' decoration='p'>
          {subTitle}
        </Text>
        {actionBtn}
      </div>
    </>
  );
};

export const UnauthorizedAccessMessageComponent = () => {
  return (
    <ErrorComponent
      actionBtn={
        <Button as='link' href={frontendLinks.HOME}>
          Go Home
        </Button>
      }
      title={'Unauthorized Access'}
      subTitle={'Unfortunately, you do not have permission to view this page.'}
    />
  );
};
