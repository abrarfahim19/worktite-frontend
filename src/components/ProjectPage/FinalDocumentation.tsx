import React from 'react';
import { Text } from '@/ui/Text';
import { Button } from '@/ui/Button';

const FinalDocumentation = () => {
  return (
    <div className='flex items-center justify-between'>
      <Text tag='p' decoration='p'>
        Final documentation
      </Text>
      <Button as='link' href='viewdocument'>
        View documents
      </Button>
    </div>
  );
};

FinalDocumentation.propTypes = {};

export default FinalDocumentation;
