export interface SignupResponse {
  status: string;
  data: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  subscription: string;
  isVerified: boolean;
  chats: string[];
  uploadRequest: number;
  maxUploadRequest: number;
  queryRequest: number;
  queryMax: number;
  _id: string;
  starMessages: {
    messageID: string;
    chatID: string;
  }[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  token: string;
}

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (res.ok) {
    return res.json();
  } else {
    const error = await res.json();
    throw new Error(error.message);
  }
};

export const signup = async ({
  email,
  password,
  firstName,
  lastName,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}): Promise<SignupResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, firstName, lastName }),
    },
  );
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Failed to signup');
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export const isValidToken = async (token: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/verifyToken`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (res.ok) {
    return true;
  } else {
    return false;
  }
};
