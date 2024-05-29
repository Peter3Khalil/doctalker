import { request } from '@/lib/request';

export interface SignupResponse {
  status: string;
  data: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscription: string;
  isVerified: boolean;
  chats: string[];
  uploadRequest: number;
  maxUploadRequest: number;
  queryRequest: number;
  queryMax: number;
  _id: string;
  starMessages: {
    messageID: string;
    chatID: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await request<User>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
    method: 'POST',
    data: { email, password },
  });
  return res;
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
  const res = await request<SignupResponse>({
    url: `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
    method: 'POST',
    data: { email, password, firstName, lastName },
  });
  return res;
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export const isValidToken = async (token: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/verifyToken`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (res.ok) {
    return true;
  } else {
    return false;
  }
};
