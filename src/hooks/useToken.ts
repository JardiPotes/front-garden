import {useState} from 'react';

type useToken = {
  setToken: (userToken: string) => void;
  removeToken: () => void;
  token: string | null;
};

export default function useToken(): useToken {
  const getToken = (): string | null => {
    return sessionStorage.getItem('token');
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string): void => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const removeToken = (): void => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return {
    setToken: saveToken,
    removeToken,
    token,
  };
}
