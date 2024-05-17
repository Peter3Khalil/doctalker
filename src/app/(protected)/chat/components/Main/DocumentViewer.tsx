'use client';
import { cn } from '@/lib/utils';
import React, { FC, useContext } from 'react';
import { MainContext } from '.';
import Wrapper from './Wrapper';
interface DocumentViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

const DocumentViewer: FC<DocumentViewerProps> = ({
  className,
  src,
  ...props
}) => {
  const { isShown } = useContext(MainContext);
  return (
    <Wrapper
      className={cn('transition-class flex flex-col', className, {
        'invisible w-0 flex-none overflow-hidden opacity-0': !isShown,
      })}
      {...props}
    >
      <iframe
        src={cn(`https://docs.google.com/gview?url=${src}&embedded=true`)}
        className={cn('h-full w-full')}
      ></iframe>
    </Wrapper>
  );
};

export default DocumentViewer;
