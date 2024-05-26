'use client';
import React, { useEffect } from 'react';
const Chat: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Example: Trigger shortcut on 'Ctrl + S'
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent the default browser behavior (e.g., saving the page)
        handleShortcut();
      }
    };

    const handleShortcut = () => {
      alert('Shortcut triggered!');
      // Add your custom logic here
    };

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="flex w-full flex-col px-2">
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
      <div className="h-32 w-full bg-primary"></div>
    </div>
  );
};

export default Chat;
