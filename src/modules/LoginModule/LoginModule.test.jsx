import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginModule from './LoginModule';
import { AuthContext } from '../../context/AuthContext';
import { CourseContext } from '../../context/CourseContext';
import { BrowserRouter } from 'react-router-dom';

// Mock the contexts and the useNotification hook
jest.mock('../../context/AuthContext', () => ({
  AuthContext: {
    Consumer: ({ children }) => children({ login: jest.fn(), authToken: null }),
  },
  useAuth: () => ({ login: jest.fn(), authToken: null }),
}));

jest.mock('../../context/CourseContext', () => ({
  CourseContext: {
    Consumer: ({ children }) => children({ ongoingCourses: [] }),
  },
}));

// Mock NotificationContext and useNotification
jest.mock('../../components/Notification/Notification', () => ({
  NotificationContext: {
    Consumer: ({ children }) => children({ showNotification: jest.fn() }),
  },
  useNotification: () => ({ showNotification: jest.fn() }),
}));

describe('LoginModule Component', () => {
  it('renders initial state correctly', () => {
    render(
      <BrowserRouter>
        <AuthContext.Consumer>
          {(authContext) => (
            <CourseContext.Consumer>
              {(courseContext) => (
                // NotificationContext is provided by the mock, no need to import it directly here
                <NotificationContext.Consumer>
                  {(notificationContext) => (
                    <LoginModule />
                  )}
                </NotificationContext.Consumer>
              )}
            </CourseContext.Consumer>
          )}
        </AuthContext.Consumer>
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
