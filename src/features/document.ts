import type {
  ProcessFileResponse,
  UploadDocumentsResponse,
  UploadFileResponse,
} from '@/types/apisResponses';
import { AxiosRequestConfig } from 'axios';
import client from './client';

export const uploadFile = async ({
  file,
  config,
}: {
  file: File;
  config?: AxiosRequestConfig<FormData>;
}): Promise<UploadFileResponse> => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await client.post('/api/upload/upload', formData, config);

  return res.data;
};

export const processDocument = async ({
  chatId,
}: {
  chatId: string;
}): Promise<ProcessFileResponse> => {
  const res = await client.post('/api/upload/process', { chatId });

  return res.data;
};

type UploadDocumentsParams = {
  files: FileList | File[];
  folderName?: string;
  config?: AxiosRequestConfig<FormData>;
};

export const uploadDocuments = async ({
  files,
  config,
  folderName,
}: UploadDocumentsParams): Promise<UploadDocumentsResponse> => {
  const formData = new FormData();

  if (files.length === 1) {
    return uploadFile({ file: files[0], config });
  }

  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  if (folderName) {
    formData.append('folderName', folderName);
  }

  const res = await client.post('/api/upload/uploadfolder', formData, config);

  return res.data;
};
