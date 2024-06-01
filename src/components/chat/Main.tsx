'use client';
import { FC } from 'react';
import { ScrollArea } from '../ui/scroll-area';
interface MainProps extends React.HTMLAttributes<HTMLDivElement> {}
const Main: FC<MainProps> = ({ children }) => {
  return <ScrollArea>{children}</ScrollArea>;
};

export default Main;
