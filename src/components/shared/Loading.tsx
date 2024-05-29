'use client';
import LoadingBar from './LoadingBar';

const LoadingComponent = () => {
  return (
    <div className="left-0 top-0 z-[400] flex h-[100svh] w-[100vw] items-center justify-center bg-foreground text-background">
      <LoadingBar height={80} width={80} />
    </div>
  );
};

export default LoadingComponent;
