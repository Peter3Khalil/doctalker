import React, { FC } from 'react';
interface PageTitleProps extends React.HTMLProps<HTMLHeadingElement> {}
const PageTitle: FC<PageTitleProps> = ({ children }) => {
  return <h1 className="mb-8 text-4xl font-bold">{children}</h1>;
};

export default PageTitle;
