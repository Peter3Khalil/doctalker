interface RequestProps extends RequestInit {
  url: string;
  data: Record<string, unknown>;
}
export const request = async <T>({
  url,
  method = 'POST',
  headers,
  data,
  ...props
}: RequestProps): Promise<T> => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {}),
    },
    body: JSON.stringify(data),
    ...props,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};
