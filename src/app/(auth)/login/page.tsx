'use client';
import InputField from '@/components/shared/InputField';
import { Button } from '@/components/ui/button';
import { LOGIN_FIELDS } from '@/constants/authPages';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import Link from 'next/link';
import { FC } from 'react';
import FormContainer from '../components/FormContainer';
import PageTitle from '../components/PageTitle';
import { SubmitHandler, useForm } from 'react-hook-form';
type Inputs = {
  email: string;
  password: string;
};
interface PageProps {}
const Login: FC<PageProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onBlur',
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //TODO: Implement login logic
    console.log(data);
  };
  return (
    <div className="flex w-full flex-col items-center">
      <PageTitle>Login</PageTitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {LOGIN_FIELDS.map((field, i) => (
          <fieldset key={i}>
            <InputField
              isValid={isValid}
              field={field}
              register={register(field.name as keyof Inputs, {
                required: 'This field is required',
              })}
              errorMessage={
                errors[field.name as keyof Inputs]?.message as string
              }
            />
          </fieldset>
        ))}
        <Button className="mt-6 w-full text-lg" disabled={!isValid}>
          Login
        </Button>
      </FormContainer>
      <p className="mt-4">
        New to DocTalker?{' '}
        <Link className="font-bold text-primary" href={PAGES_ROUTES.register}>
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
