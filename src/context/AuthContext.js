import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserProfile } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (authToken) {
        try {
          const userData = await getUserProfile();
          setUser(userData);
          setIsLoggedIn(true);
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          localStorage.removeItem('token');
          setAuthToken(null);
          setIsLoggedIn(false);
          setUser(null);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [authToken]);

  const login = (token, userData = null) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
    if (userData) {
      setUser(userData);
      setIsLoggedIn(true);
    } else {
      // If user data is not provided, it will be fetched by the useEffect
      // The useEffect will also handle setting loading to false
    }
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, authToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
