'use client';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import Wrapper from './Wrapper';
interface DocumentViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

const DocumentViewer: FC<DocumentViewerProps> = ({
  className,
  src,
  ...props
}) => {
  const { isPdfShown } = useGlobalContext();
  return (
    <Wrapper
      className={cn('transition-class flex flex-col', className, {
        'invisible w-0 flex-none': !isPdfShown,
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
