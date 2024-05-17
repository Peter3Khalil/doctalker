'use client';
import Reveal from '@/components/Animation/Reveal';
import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const Chat: React.FC = () => {
  return (
    <div className="flex h-full w-full gap-3">
      <Reveal duration={1} className="w-fit">
        <Sidebar />
      </Reveal>
      <Reveal
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
          },
        }}
      >
        <Main />
      </Reveal>
    </div>
  );
};

export default Chat;
