'use client';
import { getMe } from '@/features/user';
import { User } from '@/types/models';
import { createContext, useContext } from 'react';
import { useQuery } from 'react-query';
const initialUser: User = {
  _id: '',
  email: '',
  isVerified: false,
  firstName: '',
  lastName: '',
  queryMax: 0,
  queryRequest: 0,
  maxUploadRequest: 0,
  uploadRequest: 0,
  starMessages: [],
  subscription: 'free',
  token: '',
};

type ContextType = {
  user: User;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: unknown;
};
const UserContext = createContext<ContextType>({
  user: initialUser,
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: undefined,
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isError, isSuccess, isLoading, error } = useQuery(
    'getUser',
    getMe,
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  return (
    <UserContext.Provider
      value={{
        user: data?.user || initialUser,
        isError,
        isLoading,
        isSuccess,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export { UserProvider, useUser };
