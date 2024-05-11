'use client';
import InputField from '@/components/shared/InputField';
import { Button } from '@/components/ui/button';
import { LOGIN_FIELDS } from '@/constants/authPages';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import Link from 'next/link';
import { FC } from 'react';
import FormContainer from '../components/FormContainer';
import PageTitle from '../components/PageTitle';
interface PageProps {}
const Login: FC<PageProps> = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <PageTitle>Login</PageTitle>
      <FormContainer>
        {LOGIN_FIELDS.map((field, i) => (
          <fieldset key={i}>
            <InputField field={field} />
          </fieldset>
        ))}
        <Button className="mt-6 w-full text-lg">Login</Button>
      </FormContainer>
      <Link href={PAGES_ROUTES.register}>Sign up</Link>
    </div>
  );
};

export default Login;
