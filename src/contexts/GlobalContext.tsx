'use client';
import React, { createContext } from 'react';
type GlobalContextType = {
  isPdfShown: boolean;
  isSidebarClosed: boolean;
  toggleSidebar: () => void;
  togglePdf: () => void;
};
const GlobalContext = createContext<GlobalContextType>({
  isPdfShown: true,
  isSidebarClosed: true,
  toggleSidebar: () => {},
  togglePdf: () => {},
});

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPdfShown, setIsPdfShown] = React.useState(true);
  const [isSidebarClosed, setIsSidebarClosed] = React.useState(true);
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
