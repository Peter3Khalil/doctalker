'use client';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const useMutate = <T, U>(fn: (data: U) => Promise<T>) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const mutate = async (data: U) => {
    setLoading(true);
    try {
      const res = await fn(data);
      return res;
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, mutate };
};
export default useMutate;
