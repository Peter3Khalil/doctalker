import type { User } from '@/types/apis';
import client from './client';
export const getMe = async (): Promise<User> => {
  const res = await client.get('/api/user/me');
  return res.data;
};
