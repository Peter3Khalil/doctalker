import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('token') : ''}`;

  return config;
});
export default instance;
