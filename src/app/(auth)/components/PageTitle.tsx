import { cn } from '@/lib/utils';
import React, { FC } from 'react';
interface PageTitleProps extends React.HTMLProps<HTMLHeadingElement> {}
const PageTitle: FC<PageTitleProps> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('mb-8 text-4xl font-bold', className)} {...props}>
      {children}
    </h1>
  );
};

export default PageTitle;
