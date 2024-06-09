'use client';
import FileUploader from '@/components/FileUploader';
import FolderUploader from '@/components/premiumComponents/FolderUploader';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useUser } from '@/providers/user-provider';
import React from 'react';

const Chat: React.FC = () => {
  const { user } = useUser();

  return (
    <ScrollArea className="h-full w-full">
      <div className="flex flex-col items-center gap-3 px-10 pb-6 pt-12 md:gap-8">
        <article className="prose prose-lg text-center dark:prose-invert *:my-2">
          <h1 className="gradient bg-clip-text dark:to-foreground">
            Hello, {user?.firstName}
          </h1>
          <p>How can we help you today?</p>
        </article>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:max-w-3xl md:flex-row md:items-baseline">
          <FileUploader />
          <FolderUploader />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Chat;
