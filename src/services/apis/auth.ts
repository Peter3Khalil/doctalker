import { User } from '@/types/apis';
import apiService from './apiService';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User | Response | OmitThisParameter<User>> => {
  const res = await apiService.post('/api/user/login', {
    data: { email, password },
  });
  if (res.ok) {
    const data: User = await res.json();
    return data;
  }
  return res;
};

export const signUp = async ({
  email,
  password,
  firstName,
  lastName,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const res = apiService.post<
    unknown,
    {
      status: string;
      data: {
        token: string;
      };
    }
  >('/api/user/signup', {
    data: { email, password, firstName, lastName },
  });
  return res;
};
