/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingComponent from '@/components/shared/Loading';
import { useUser } from '@/providers/user-provider';
import { ComponentProps, ComponentType, useEffect } from 'react';

const withEmailVerification = <T extends ComponentType<any>>(Component: T) => {
  const WithEmailVerification = (props: ComponentProps<T>) => {
    const { user, isSuccess, isError, isLoading } = useUser();

    //CASE 1: If the user is not verified, redirect to the verify-email page
    useEffect(() => {
      if (isSuccess && !user?.isVerified) {
        window.location.href = '/verify-email';
      }
    }, [isSuccess, user.isVerified]);

    //CASE 2: If the user is not authenticated, or there is an error, redirect to the login page
    useEffect(() => {
      if (isError) {
        window.location.href = '/login';
      }
    }, [isError]);

    if (isLoading) return <LoadingComponent />;
    if (user?.isVerified && isSuccess) return <Component {...props} />;
  };

  return WithEmailVerification;
};

export default withEmailVerification;
