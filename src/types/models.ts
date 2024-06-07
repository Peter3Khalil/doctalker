export type User = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  isVerified: boolean;
  subscription: 'free' | 'gold' | 'premium' | 'admin';
  uploadRequest: number;
  maxUploadRequest: number;
  queryRequest: number;
  queryMax: number;
  starMessages: {
    messageID: string;
    chatID: string;
  }[];
};
