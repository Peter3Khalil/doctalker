'use client';
import InputField from '@/components/shared/InputField';
import { Button } from '@/components/ui/button';
import { REGISTER_FIELDS } from '@/constants/authPages';
import { PAGES_ROUTES } from '@/constants/pagesRoutes';
import Link from 'next/link';
import FormContainer from '../components/FormContainer';
import PageTitle from '../components/PageTitle';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useEffect } from 'react';
type Inputs = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};
const schema = yup
  .object({
    first_name: yup
      .string()
      .min(2, 'First Name must be at least 2 characters')
      .max(16, 'First Name must be at most 16 characters')
      .required('First Name is required'),
    last_name: yup
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const watchPassword = watch('password');
  const watchConfirmPassword = watch('confirm_password');
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (isValid) {
      if (watchPassword === watchConfirmPassword) {
        setIsPasswordMatch(true);
      } else {
        setIsPasswordMatch(false);
      }
    } else {
      setIsPasswordMatch(false);
    }
  }, [watchPassword, watchConfirmPassword, isValid]);

  const NAME_FIELDS = REGISTER_FIELDS.filter(
    (field) => field.name === 'first_name' || field.name === 'last_name',
  );
  const OTHER_FIELDS = REGISTER_FIELDS.filter(
    (field) => field.name !== 'first_name' && field.name !== 'last_name',
  );
  return (
    <div className="flex w-full flex-col items-center">
      <PageTitle>Sign Up</PageTitle>
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
          Sign Up
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
