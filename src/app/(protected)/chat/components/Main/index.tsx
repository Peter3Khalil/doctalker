'use client';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import DocumentViewer from './DocumentViewer';
import ChatViewer from './ChatViewer';
import ChatHeader from './ChatHeader';
type MainContextProps = {
  isShown: boolean;
  toggle: () => void;
};
export const MainContext = React.createContext<MainContextProps>({
  isShown: true,
  toggle: () => null,
});
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isShown, setIsShown] = React.useState(true);
  const toggle = React.useCallback(() => setIsShown((prev) => !prev), []);
  return (
    <MainContext.Provider value={{ isShown, toggle }}>
      {children}
    </MainContext.Provider>
  );
};

const Main: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <ContextProvider>
      <div className="flex h-full w-full flex-col gap-3">
        <ChatHeader />
        <main
          className={cn(
            'flex flex-1 gap-2 overflow-auto bg-accent-foreground',
            className,
          )}
          {...props}
        >
          <ChatViewer />
          <DocumentViewer src="https://peterkhalil.netlify.app/pdf.pdf" />
        </main>
      </div>
    </ContextProvider>
  );
};

export default Main;
