'use client';

import { apiPost } from '@/config/common/api';
import { apiRoutes } from '@/config/common/apiRoutes';
import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

const authContext = createContext(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useProvideAuth();
  // @ts-ignore
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  function signIn(username: string, password: string) {
    setLoading(true);
    fetch(apiRoutes.AUTH.LOGIN);
  }

  function signUp(username: string, password: string) {
    setLoading(true);
    return apiPost(apiRoutes.AUTH.LOGIN, {
      username: username,
      password: password,
    });
  }

  function signOut(username: string, password: string) {
    setLoading(true);
    fetch(apiRoutes.AUTH.LOGIN);
    setUser(null);
  }

  function autoSignIn(username: string, password: string) {
    setLoading(true);
    fetch(apiRoutes.AUTH.LOGIN);
  }

  return {
    user,
    loading,
    errors,
    signIn,
    signOut,
    signUp,
  };
}
