import type { GetMeResponse } from '@/types/apisResponses';
import client from './client';

export const getMe = async (): Promise<GetMeResponse> => {
  const res = await client.get('/api/user/me');

  return res.data;
};
