import React, { FC } from 'react';
import { Bars } from 'react-loader-spinner';
interface LoadingBarProps extends React.ComponentProps<typeof Bars> {}

const LoadingBar: FC<LoadingBarProps> = ({ height, width, ...props }) => {
  return (
    <Bars
      height={height}
      width={width}
      color="#7C3AED"
      ariaLabel="bars-loading"
      visible={true}
      {...props}
    />
  );
};

export default LoadingBar;
