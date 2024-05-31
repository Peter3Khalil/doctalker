'use client';
import InputField from '@/components/shared/InputField';
import { Button } from '@/components/ui/button';
import { REGISTER_FIELDS } from '@/constants/authPages';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import { signup } from '@/features/authentication';
import useMutate from '@/hooks/useMutate';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import FormContainer from '../components/FormContainer';
import PageTitle from '../components/PageTitle';
import { useRouter } from 'next/navigation';
import LoadingBar from '@/components/shared/LoadingBar';
type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirm_password: string;
};
const schema = yup
  .object({
    firstName: yup
      .string()
      .min(2, 'First Name must be at least 2 characters')
      .max(16, 'First Name must be at most 16 characters')
      .required('First Name is required'),
    lastName: yup
      .string()
      .min(2, 'Last Name must be at least 2 characters')
      .max(16, 'Last Name must be at most 16 characters')
      .required('Last Name is required'),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
    confirm_password: yup.string().min(8).max(16).required(),
  })
  .required();
const SignUp = () => {
  const [isPasswordMatch, setIsPasswordMatch] = React.useState(false);
  const router = useRouter();
  const { error, mutate, loading } = useMutate(signup);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const password = watch('password');
  const confirmPassword = watch('confirm_password');
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await mutate(
      data as unknown as {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      },
    );
    if (!res) return;
    localStorage.setItem('token', res?.data.token as string);
    router.replace('/chat');
  };
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  useEffect(() => {
    if (isValid) {
      if (password === confirmPassword) {
        setIsPasswordMatch(true);
      } else {
        setIsPasswordMatch(false);
      }
    } else {
      setIsPasswordMatch(false);
    }
  }, [password, confirmPassword, isValid]);

  const NAME_FIELDS = REGISTER_FIELDS.filter(
    (field) => field.name === 'firstName' || field.name === 'lastName',
  );
  const OTHER_FIELDS = REGISTER_FIELDS.filter(
    (field) => field.name !== 'firstName' && field.name !== 'lastName',
  );
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-8 flex flex-col items-center gap-1">
        <PageTitle className="mb-0">Sign Up</PageTitle>
        {!!error && (
          <p className="text-center text-destructive">
            Email already exists. Please try again with a different email
          </p>
        )}
      </div>{' '}
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          {NAME_FIELDS.map((field, i) => (
            <fieldset key={i} className="w-full">
              <InputField
                field={field}
                isValid={isValid && isPasswordMatch}
                register={register(field.name as keyof Inputs, {
                  required: 'This field is required',
                })}
                errorMessage={
                  errors[field.name as keyof Inputs]?.message as string
                }
              />
            </fieldset>
          ))}
        </div>
        {OTHER_FIELDS.map((field, i) => (
          <fieldset key={i}>
            <InputField
              isValid={isValid && isPasswordMatch}
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
        {!isPasswordMatch && isValid && (
          <div className="flex w-full items-center justify-center">
            <p className="text-sm text-destructive">Password does not match</p>
          </div>
        )}
        <Button
          className="mt-6 w-full text-lg"
          disabled={!isValid || !isPasswordMatch}
        >
          {loading ? (
            <LoadingBar color="#fff" width={30} height={30} />
          ) : (
            'Sign Up'
          )}
        </Button>
      </FormContainer>
      <p className="mt-4">
        Already have an account?{' '}
        <Link className="font-bold text-primary" href={PAGES_ROUTES.login}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
