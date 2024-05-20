'use client';
import React from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

const Chat: React.FC = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Chat;
