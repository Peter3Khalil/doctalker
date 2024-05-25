'use client';
import useGlobalContext from '@/hooks/useGlobalContext';
import { cn } from '@/lib/utils';
import { FC } from 'react';
interface MainProps extends React.HTMLAttributes<HTMLDivElement> {}
const Main: FC<MainProps> = ({ className, children, ...props }) => {
  const { isSidebarClosed } = useGlobalContext();
  return (
    <main
      className={cn(
        'transition-class absolute right-0 z-10 h-full w-full bg-slate-400 pt-[60px] lg:w-[calc(100%-250px)]',
        className,
        {
          'lg:w-full': isSidebarClosed,
        },
      )}
      {...props}
    >
      {children}
    </main>
  );
};

export default Main;
