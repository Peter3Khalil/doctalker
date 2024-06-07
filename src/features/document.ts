import type {
  ProcessFileResponse,
  UploadFileResponse,
  UploadFolderResponse,
} from '@/types/apisResponses';
import client from './client';
import { AxiosRequestConfig } from 'axios';

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
}): Promise<ProcessFileResponse> => {
  const res = await client.post('/api/upload/process', { chatId });

  return res.data;
};

type UploadFolderParams = {
  files: FileList;
  folderName?: string;
  config?: AxiosRequestConfig<FormData>;
};

export const uploadFolder = async ({
  files,
  config,
  folderName,
}: UploadFolderParams): Promise<UploadFolderResponse> => {
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  if (folderName) {
    formData.append('folderName', folderName);
  }

  const res = await client.post('/api/upload/uploadfolder', formData, config);

  return res.data;
};
