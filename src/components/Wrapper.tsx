import React from 'react';

interface WrapperProps {
    width?: 'w-25' | 'w-50' | 'w-75';
}

export const Wrapper: React.FC<WrapperProps> = ({ width, children }) => {
  return <div className={`${width} container`}>{children}</div>;
};
export default Wrapper;
