'use client';
import useMediaQuery from '@/hooks/useMediaQuery';
import React, { createContext, useEffect } from 'react';
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
  const { isMatched: isMobile } = useMediaQuery({ maxWidth: 768 });
  const togglePdf = React.useCallback(() => setIsPdfShown((prev) => !prev), []);
  useEffect(() => {
    if (isMobile && !isSidebarClosed) {
      toggleSidebar();
    }
  }, [isMobile]);
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
