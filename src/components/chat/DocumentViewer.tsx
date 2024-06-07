'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { cn } from '@/lib/utils';
import { useGlobalState } from '@/providers/state-provider';
import { useInView } from 'framer-motion';
import React, { FC, useEffect, useRef } from 'react';
import Wrapper from './Wrapper';
interface DocumentViewerProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
}

const DocumentViewer: FC<DocumentViewerProps> = ({
  className,
  src,
  ...props
}) => {
  const { isPdfShown, setTap, togglePdf } = useGlobalState();

  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });

  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    amount: 0.8,
  });
  useEffect(() => {
    if (isInView) {
      setTap('document');
    }
  }, [isInView, setTap]);
  useEffect(() => {
    // Always show pdf on Mobile
    if (isMobile && !isPdfShown) {
      togglePdf();
    }
  }, [isMobile, isPdfShown, togglePdf]);

  return (
    <Wrapper
      className={cn('transition-class flex flex-col', className, {
        'invisible flex-none overflow-hidden md:w-0 md:flex-none': !isPdfShown,
      })}
      id="document"
      ref={ref}
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
