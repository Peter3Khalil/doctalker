import { request } from '@/lib/utils';

class ApiService {
  private BaseURL: string;
  constructor() {
    this.BaseURL = process.env.NEXT_PUBLIC_API_URL || '';
  }
  async get<T = unknown>(
    url: string,
    {
      headers,
    }: {
      headers?: Record<string, string>;
    },
  ) {
    return await request<T>({
      method: 'GET',
      url: `${this.BaseURL}${url}`,
      headers,
    });
  }
  async post<T = unknown>(
    url: string,
    {
      data,
      headers,
    }: {
      data: T;
      headers?: Record<string, string>;
    },
  ) {
    return await request<T>({
      method: 'POST',
      url: `${this.BaseURL}${url}`,
      data,
      headers,
    });
  }
  async put<T = unknown>(
    url: string,
    data: T,
    headers?: Record<string, string>,
  ) {
    return await request<T>({
      method: 'PUT',
      url: `${this.BaseURL}${url}`,
      data,
      headers,
    });
  }
  async delete<T = unknown>(url: string, headers?: Record<string, string>) {
    return await request<T>({
      method: 'DELETE',
      url: `${this.BaseURL}${url}`,
      headers,
    });
  }
}
const apiService = new ApiService();

export default apiService;
