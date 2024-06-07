import axios, { AxiosError, isAxiosError } from 'axios';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`;

  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      const { response } = axiosError;

      if (response?.status === 401 || response?.status === 403) {
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
    }

    return Promise.reject(error);
  },
);
export default instance;
