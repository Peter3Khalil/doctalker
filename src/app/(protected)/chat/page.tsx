'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
const Chat: React.FC = () => {
  return (
    <div className="prose prose-sm prose-slate mx-auto flex h-full w-full flex-col items-center justify-center gap-6 py-12 dark:prose-invert md:prose-lg">
      <article className="flex flex-col items-center gap-2 text-center *:m-0">
        <h1 className="w-fit">Hello, Peter</h1>
        <p className="w-fit">How can I help you today?</p>
      </article>
      <ul className="flex w-full list-none flex-col items-center gap-4 overflow-auto *:shrink-0 md:flex-row">
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            className="transition-class h-[230px] w-[200px] cursor-pointer rounded bg-background/40 hover:bg-hover-muted"
          ></li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <Button>File</Button>
        <Button variant={'outline'}>Folder</Button>
      </div>
    </div>
  );
};

export default Chat;
