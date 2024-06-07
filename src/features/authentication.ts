import type { User } from '@/types/models';
import client from './client';
import type { SignupResponse, VerifyOTPResponse } from '@/types/apisResponses';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await client.post('/api/user/login', { email, password });

  return res.data;
};

type SignupParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export const signup = async ({
  email,
  password,
  firstName,
  lastName,
}: SignupParams): Promise<SignupResponse> => {
  const res = await client.post('/api/user/signup', {
    email,
    password,
    firstName,
    lastName,
  });

  return res.data;
};

export const verifyOTP = async ({
  otp,
}: {
  otp: string;
}): Promise<VerifyOTPResponse> => {
  const res = await client.post('/api/user/otp/verify', { otp });

  return res.data;
};

export const resendOTP = async ({
  email,
}: {
  email: string;
}): Promise<{ message: string }> => {
  const res = await client.post('/api/user/otp/resend', { email });

  return res.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export const isValidToken = async () => {
  const res = await client.get('/api/user/verifyToken');

  return res.data;
};
