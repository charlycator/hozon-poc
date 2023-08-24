import React, { FC, createContext, useState } from 'react';

import {
  loginWithEmailOTP,
  logoutFromMagic,
} from '@lib/magic-link';
import { Auth } from '@types';


export const AuthContext = createContext<Auth>({
  email: null,
  isAuthenticated: false,
  loading: false,
  login: () => { },
  logout: () => { },
});

interface props {
  children: React.ReactNode,
}


export const AuthProvider: FC<props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const login = async (email: string) => {
    setIsLoading(true);
    await loginWithEmailOTP(email);
    setIsAuthenticated(true);
    setEmail(email);
    setIsLoading(false);
  }

  const logout = async () => {
    setIsLoading(true);
    await logoutFromMagic();
    setIsAuthenticated(false);
    setEmail(null);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, email, loading: isLoading , login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
