import client from './client';
import { AxiosRequestConfig } from 'axios';
export interface UploadFileResponse {
  message: string;
  chatId: string;
}

export const uploadFile = async ({
  formData,
  config,
}: {
  formData: FormData;
  config?: AxiosRequestConfig<FormData>;
}): Promise<UploadFileResponse> => {
  const res = await client.post('/api/upload/upload', formData, config);
  return res.data;
};

export const processFile = async ({
  chatId,
}: {
  chatId: string;
}): Promise<{
  status: string;
  message: string;
}> => {
  const res = await client.post('/api/upload/process', { chatId });
  return res.data;
};
