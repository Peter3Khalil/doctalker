'use client';
import InputField from '@/components/shared/InputField';
import LoadingBar from '@/components/shared/LoadingBar';
import { Button } from '@/components/ui/button';
import { LOGIN_FIELDS } from '@/constants/authPages';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormContainer from '../components/FormContainer';
import PageTitle from '../components/PageTitle';
import { useMutation } from 'react-query';
import { login } from '@/features/authentication';
type Inputs = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const router = useRouter();

  const { mutate, isError, isLoading } = useMutation(login, {
    onSuccess(data) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));
      router.replace('/chat');
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  useEffect(() => {
    localStorage.removeItem('token');
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-8 flex flex-col items-center gap-1">
        <PageTitle className="mb-0">Login</PageTitle>
        {isError && (
          <p className="text-center text-destructive">
            Invalid email or password
          </p>
        )}
      </div>
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
        <Button
          className={cn('mt-6 w-full text-lg')}
          disabled={!isValid || isLoading}
        >
          {isLoading ? (
            <LoadingBar color="#fff" width={30} height={30} />
          ) : (
            'Login'
          )}
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
