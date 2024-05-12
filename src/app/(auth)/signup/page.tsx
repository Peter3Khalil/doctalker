'use client';
import InputField from '@/components/shared/InputField';
import { Button } from '@/components/ui/button';
import { REGISTER_FIELDS } from '@/constants/authPages';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import Link from 'next/link';
import FormContainer from '../components/FormContainer';
import PageTitle from '../components/PageTitle';

const SignUp = () => {
  const NAME_FIELDS = REGISTER_FIELDS.filter(
    (field) => field.name === 'first_name' || field.name === 'last_name',
  );
  const OTHER_FIELDS = REGISTER_FIELDS.filter(
    (field) => field.name !== 'first_name' && field.name !== 'last_name',
  );
  return (
    <div className="flex w-full flex-col items-center">
      <PageTitle>Sign Up</PageTitle>
      <FormContainer>
        <div className="flex gap-2">
          {NAME_FIELDS.map((field, i) => (
            <fieldset key={i} className="w-full">
              <InputField field={field} />
            </fieldset>
          ))}
        </div>
        {OTHER_FIELDS.map((field, i) => (
          <fieldset key={i}>
            <InputField field={field} />
          </fieldset>
        ))}
        <Button className="mt-6 w-full text-lg">Sign Up</Button>
      </FormContainer>
      <Link href={PAGES_ROUTES.login}>Login</Link>
    </div>
  );
};

export default SignUp;
