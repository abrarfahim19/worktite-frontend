'use client';
import { useState } from 'react';

interface LoaderComponentInterface {
  preText: string;
  postText: string;
}

export interface LoaderComponentProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    LoaderComponentInterface {}

const LoaderComponent: React.FC<LoaderComponentProps> = ({
  preText,
  postText,
  ...props
}) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <p {...props}>
      {preText}{' '}
      {!show ? (
        <span className='cursor-pointer text-brand' onClick={showHandler}>
          Read More
        </span>
      ) : (
        <span> {postText} </span>
      )}{' '}
    </p>
  );
};

export default LoaderComponent;
