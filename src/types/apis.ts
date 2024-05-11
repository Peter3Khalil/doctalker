export type RequestParams<T> = {
  method:
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'PATCH'
    | 'OPTIONS'
    | 'HEAD'
    | 'CONNECT'
    | 'TRACE';
  url: string;
  data?: T;
  headers?: Record<string, string>;
};

export type User = {
  _id: string;
  email: string;
  password: string;
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
