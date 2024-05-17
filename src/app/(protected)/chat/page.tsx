'use client';
import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const Chat: React.FC = () => {
  return (
    <div className="flex h-full w-full gap-3">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Chat;
