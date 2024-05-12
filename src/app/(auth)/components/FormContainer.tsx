import React, { FC } from 'react';
interface FormContainerProps extends React.HTMLProps<HTMLFormElement> {}

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  return (
    <form className="flex w-full flex-col gap-3 md:w-[400px] lg:w-[90%]">
      {children}
    </form>
  );
};

export default FormContainer;
