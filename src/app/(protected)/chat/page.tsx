'use client';
import FileUploader from '@/components/FileUploader';
import FolderUploader from '@/components/premiumComponents/FolderUploader';
import LoadingBar from '@/components/shared/LoadingBar';
import { useUser } from '@/providers/user-provider';
import { User } from '@/types/apis';
import React from 'react';
import { UseQueryResult } from 'react-query';
const Chat: React.FC = () => {
  const { data: user, isLoading } = useUser() as UseQueryResult<User, unknown>;
  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingBar />
      </div>
    );
  return (
    <div className="flex h-full w-full flex-col items-center gap-3 overflow-auto px-10 pb-6 pt-12 md:gap-16">
      <article className="prose prose-lg text-center dark:prose-invert *:my-2">
        <h1 className="gradient bg-clip-text dark:to-foreground">
          Hello, {user?.firstName}
        </h1>
        <p>How can we help you today?</p>
      </article>
      <div className="prose prose-lg flex w-full flex-col items-center justify-center gap-4 dark:prose-invert md:max-w-3xl md:flex-row md:items-baseline">
        <FileUploader />
        <FolderUploader />
      </div>
    </div>
  );
};

export default Chat;
