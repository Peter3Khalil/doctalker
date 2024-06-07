'use client';
import { SecurityIcon } from '@/components/shared/Icons';
import LoadingComponent from '@/components/shared/Loading';
import LoadingBar from '@/components/shared/LoadingBar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  resendOTP as requestToResendOTP,
  verifyOTP,
} from '@/features/authentication';
import { cn } from '@/lib/utils';
import { UserProvider, useUser } from '@/providers/user-provider';
import React, { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

const VerifyEmail = () => {
  const [otp, setOTP] = useState('');
  const [showError, setShowError] = useState(false);
  const {
    mutate: sendOTP,
    isLoading: isVerifyingOTP,
    isError: isFailedVerifyingOTP,
    isSuccess: isVerifiedOTPSuccessfully,
  } = useMutation(verifyOTP);

  const {
    user,
    isSuccess: isUserFetchedSuccessfully,
    isError: isFailedFetchingUser,
    isLoading: isLoadingUser,
  } = useUser();

  const {
    mutate: resendOTP,
    isLoading: isLoadingResendOTP,
    isSuccess: isSentOTPSuccessfully,
    isError: isFailedSendingOTP,
  } = useMutation(requestToResendOTP);

  const handleOnChange = (e: string) => {
    setOTP(e);
  };

  const handleSendingOTP = () => {
    sendOTP({ otp });
  };

  const handleResendOTP = useCallback(() => {
    resendOTP({ email: user.email });
  }, [resendOTP, user.email]);

  //CASE_1: User is already verified
  useEffect(() => {
    if (isUserFetchedSuccessfully && user.isVerified) {
      window.location.href = '/chat';
    }
  }, [isUserFetchedSuccessfully, user.isVerified]);

  //CASE_2: User is not logged in or some error occurred
  useEffect(() => {
    if (isFailedFetchingUser) {
      window.location.href = '/login';
    }
  }, [isFailedFetchingUser]);

  //CASE_3: Fetch user data
  useEffect(() => {
    if (isUserFetchedSuccessfully) {
      handleResendOTP();
    }
  }, [handleResendOTP, isUserFetchedSuccessfully]);

  //CASE_4: User is verified
  useEffect(() => {
    if (isVerifiedOTPSuccessfully) {
      setTimeout(() => {
        window.location.href = '/chat';
      }, 2000);
    }
  }, [isVerifiedOTPSuccessfully]);

  //CASE_5: OTP verification failed
  useEffect(() => {
    if (isFailedVerifyingOTP) {
      setShowError(true);
    }
  }, [isFailedVerifyingOTP]);

  //CASE_6: OTP Sent successfully, reset the error state
  useEffect(() => {
    if (isSentOTPSuccessfully) {
      setShowError(false);
    }
  }, [isSentOTPSuccessfully]);

  if (isLoadingUser) return <LoadingComponent />;
  if (isFailedFetchingUser) return null;

  return (
    <div className="flex h-svh items-center justify-center">
      <Card className="flex flex-col items-center">
        <CardHeader className="items-center">
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>
            Please enter the OTP sent to your email address
          </CardDescription>
          {showError && (
            <CardDescription className="text-sm font-medium text-destructive">
              Wrong OTP entered. Please try again
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <InputOTP onChange={handleOnChange} type="text" maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>{' '}
        </CardContent>
        <CardFooter className="flex w-full flex-col gap-2">
          <Button
            className="w-full"
            onClick={handleSendingOTP}
            disabled={
              otp.length < 6 || isVerifyingOTP || isVerifiedOTPSuccessfully
            }
          >
            {isVerifyingOTP ? (
              <LoadingBar color="#fff" width={30} height={30} />
            ) : isVerifiedOTPSuccessfully ? (
              <div className="flex items-center gap-2">
                <SecurityIcon size={24} />
                Verified
              </div>
            ) : (
              'Verify'
            )}
          </Button>
          <CardDescription>
            Didn&apos;t receive the OTP?{' '}
            <Button onClick={handleResendOTP} variant="link" className="p-0">
              Resend OTP
            </Button>
          </CardDescription>
          {isFailedSendingOTP && (
            <p className="text-sm font-medium text-destructive">
              Failed to resend OTP. Please try again
            </p>
          )}
          {isSentOTPSuccessfully && (
            <TimedComponent wait={2000}>OTP sent successfully</TimedComponent>
          )}
          {isLoadingResendOTP && (
            <p className="text-muted-foreground">Sending...</p>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

interface TimedComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  wait: number;
}

const TimedComponent = ({
  wait,
  className,
  children,
  ...props
}: TimedComponentProps) => {
  const [show, setShow] = useState(true);

  const [remove, setRemove] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, wait);

    return () => clearTimeout(timer);
  }, [wait]);
  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => {
        setRemove(true);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [show]);

  return remove ? null : (
    <div
      className={cn(
        'transition-class text-sm font-bold text-muted-foreground',
        className,
        {
          'opacity-0': !show,
        },
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const WrappedVerifyEmail = () => {
  return (
    <UserProvider>
      <VerifyEmail />
    </UserProvider>
  );
};

export default WrappedVerifyEmail;
