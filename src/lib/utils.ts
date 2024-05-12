import { RequestParams } from '@/types/apis';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function request<T = unknown>({
  method,
  url,
  data,
  headers,
}: RequestParams<T>) {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body:
      method === 'GET' || data === undefined ? undefined : JSON.stringify(data),
  });
  return response;
}
