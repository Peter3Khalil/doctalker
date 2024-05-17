'use client';
import React from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const Chat: React.FC = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Chat;
