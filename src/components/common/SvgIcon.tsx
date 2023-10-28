import React from 'react';
import PropTypes from 'prop-types';
import airbnbIcon from '../../../public/Images/svg/airbnb.svg';
import Image from 'next/image';

interface IProps {
  icon: string;
  alt?: string;
  className?: string;
}
const SvgIcon: React.FC<IProps> = ({ icon, alt = '', className }) => {
  return <Image priority src={icon} className={className} alt={alt} />;
};

SvgIcon.propTypes = {};

export default SvgIcon;
