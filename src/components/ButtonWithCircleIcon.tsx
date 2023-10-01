import React from 'react';
import PropTypes from 'prop-types';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { Button } from '@/ui/Button';
import { string } from 'zod';

interface IProps {
  btnText: string
    onClick?: any
};
const ButtonWithCircleIcon = ({btnText, onClick}: IProps) => {
  return (
      <Button onClick={onClick && onClick} intent="tertiary" className="flex items-center gap-3 text-xl text-brand font-bold">
        <IoArrowForwardCircleOutline className="text-6xl font-light" />
        {btnText}
      </Button>
  );
};


export default ButtonWithCircleIcon;