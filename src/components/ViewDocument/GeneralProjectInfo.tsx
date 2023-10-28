import React from 'react';
import { Text } from '@/ui/Text';

const GeneralProjectInfo = () => {
  return (
    <>
      <Text tag='p' decoration='p' className='font-semibold'>
        General project information
      </Text>
      <div className='mt-6 w-full'>
        <Text tag='p' decoration='p'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut
        </Text>
      </div>
    </>
  );
};

GeneralProjectInfo.propTypes = {};

export default GeneralProjectInfo;
