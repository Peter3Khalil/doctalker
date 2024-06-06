'use client';
import { SecurityIcon } from '@/components/shared/Icons';
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
import { verifyOTP } from '@/features/authentication';
import { useState } from 'react';
import { useMutation } from 'react-query';

const VerifyOTP = () => {
  const [otp, setOTP] = useState('');
  const { mutate, isLoading, isError, isSuccess } = useMutation(verifyOTP);
  //   const {
  //     mutate: mutateResendOTP,
  //     isLoading: isLoadingResendOTP,
  //     isSuccess: isSuccessOTP,
  //   } = useMutation(resendOTP);
  const handleOnChange = (e: string) => {
    setOTP(e);
  };
  const sendOTP = () => {
    mutate({ otp });
  };
  const handleResendOTP = async () => {
    // mutateResendOTP({email});
  };
  return (
    <div className="flex h-svh items-center justify-center">
      <Card className="flex flex-col items-center">
        <CardHeader className="items-center">
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>
            Please enter the OTP sent to your email address
          </CardDescription>
          {isError && (
            <CardDescription className="text-sm font-medium text-destructive">
              Wrong OTP entered. Please try again
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <InputOTP onChange={handleOnChange} maxLength={6}>
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
            variant={isSuccess ? 'secondary' : 'default'}
            onClick={sendOTP}
            disabled={otp.length < 6 || isLoading || isSuccess}
          >
            {isLoading ? (
              <LoadingBar color="#fff" width={30} height={30} />
            ) : isSuccess ? (
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
          {/* <p className='text-sm font-medium text-destructive'>Will expire in 2 minutes</p> */}
        </CardFooter>
      </Card>
    </div>
    // TODO: Add PrivateRoute
    // <PrivateRoute>
    // </PrivateRoute>
  );
};
export default VerifyOTP;
