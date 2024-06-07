'use client';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const MyQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default MyQueryClientProvider;
