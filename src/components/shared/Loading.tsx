"use client";
import React from 'react';
import { Bars } from 'react-loader-spinner';

const LoadingComponent = () => {
  return (
    <div className="flex h-[100svh] w-full items-center justify-center bg-foreground text-background">
      <Bars
        height="80"
        width="80"
        color="#7C3AED"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoadingComponent;
