'use client';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import ChatHeader from './ChatHeader';
import ChatViewer from './ChatViewer';
import DocumentViewer from './DocumentViewer';

const Main: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <ChatHeader />
      <main
        className={cn(
          'flex flex-1 gap-2 overflow-auto bg-accent-foreground',
          className,
        )}
        {...props}
      >
        <ChatViewer />
        <DocumentViewer src="https://peterkhalil.netlify.app/pdf.pdf" />
      </main>
    </div>
  );
};

export default Main;
