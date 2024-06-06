import type { User } from '@/types/apis';
import client from './client';
export interface SignupResponse {
  status: string;
  data: User;
}

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

export const signup = async ({
  email,
  password,
  firstName,
  lastName,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}): Promise<SignupResponse> => {
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
}): Promise<{
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}> => {
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
