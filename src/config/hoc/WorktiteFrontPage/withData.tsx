import React from 'react';

const withData = (ComposedComponent: any) => (props: any) => {
  return <ComposedComponent {...props} />;
};
export default withData;
