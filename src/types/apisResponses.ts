import type { User } from './models';

export type GetMeResponse = {
  user: User;
  status: string;
};

export type UploadFileResponse = {
  message: string;
  chatId: string;
};
export type ProcessFileResponse = {
  status: string;
  message: string;
};

export type SignupResponse = {
  status: string;
  data: User;
};

export type VerifyOTPResponse = {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};

export type UploadFolderResponse = {
  status: string;
  message: string;
  chatId: string;
};
