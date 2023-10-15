import React, { ReactNode } from 'react';

interface ITooltip {
  message?: string;
  children?: ReactNode;
}

export const Tooltip: React.FC<ITooltip> = ({ message, children }) => {
  return (
    <div className='group relative flex'>
      {children}
      <span className='absolute top-6 scale-0 rounded border bg-secondary p-2 text-xs transition-all group-hover:scale-100'>
        {message}
      </span>
    </div>
  );
};
