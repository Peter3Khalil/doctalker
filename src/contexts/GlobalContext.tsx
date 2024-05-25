'use client';
import React, { createContext } from 'react';
type GlobalContextType = {
  isPdfShown: boolean;
  isSidebarClosed: boolean;
  toggleSidebar: () => void;
  togglePdf: () => void;
  currentTap?: 'chat' | 'document';
  // eslint-disable-next-line no-unused-vars
  setTap: (tap: 'chat' | 'document') => void;
};
const GlobalContext = createContext<GlobalContextType>({
  isPdfShown: true,
  isSidebarClosed: false,
  toggleSidebar: () => {},
  togglePdf: () => {},
  currentTap: 'chat',
  setTap: () => {},
});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPdfShown, setIsPdfShown] = React.useState(true);
  const [isSidebarClosed, setIsSidebarClosed] = React.useState(false);
  const [currentTap, setCurrentTap] = React.useState<'chat' | 'document'>(
    'chat',
  );
  const setTap = React.useCallback(
    (tap: 'chat' | 'document') => {
      setCurrentTap(tap);
    },
    [setCurrentTap],
  );
  const toggleSidebar = React.useCallback(
    () => setIsSidebarClosed((prev) => !prev),
    [],
  );
  const togglePdf = React.useCallback(() => setIsPdfShown((prev) => !prev), []);
  return (
    <GlobalContext.Provider
      value={{
        isPdfShown,
        isSidebarClosed,
        toggleSidebar,
        togglePdf,
        currentTap,
        setTap,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
