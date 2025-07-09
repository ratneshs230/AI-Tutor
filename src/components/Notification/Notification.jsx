import React, { useState, useEffect, createContext, useContext } from 'react';
import classNames from 'classnames';
import { setNotificationFunction } from '../../utils/api';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
  };

  useEffect(() => {
    setNotificationFunction(showNotification);
  }, [showNotification]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const notificationClasses = classNames(
    'fixed bottom-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md text-white font-bold z-50 shadow-lg transition-all duration-500 ease-in-out transform',
    {
      'bg-primary-color': notification?.type === 'info',
      'bg-green-600': notification?.type === 'success',
      'bg-error-color': notification?.type === 'error',
      'bg-yellow-500': notification?.type === 'warning',
      'translate-y-0 opacity-100': notification,
      'translate-y-full opacity-0': !notification,
    }
  );

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <div className={notificationClasses}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
