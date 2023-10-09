import React from 'react';
import WorktiteLayout from '@/config/layouts/WorktiteLayout';

const withLayout = (ComposedComponent: any) => (props: any) => {
  return (
    <WorktiteLayout>
      <ComposedComponent {...props} />
    </WorktiteLayout>
  );
};
export default withLayout;
