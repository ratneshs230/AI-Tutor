import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import { CourseContext } from '../../context/CourseContext';
import LoginModule from './LoginModule';
import { loginUser, registerUser, updateUserProfile } from '../../utils/api';
import { NotificationProvider } from '../../components/Notification/Notification';

// Mock the API calls
jest.mock('../../utils/api', () => ({
  loginUser: jest.fn(),
  registerUser: jest.fn(),
  updateUserProfile: jest.fn(),
}));

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// Mock Notification
const mockedShowNotification = jest.fn();
jest.mock('../../components/Notification/Notification', () => ({
  ...jest.requireActual('../../components/Notification/Notification'),
  useNotification: () => ({
    showNotification: mockedShowNotification,
  }),
}));


describe('LoginModule', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginModule = (courses = []) => {
    render(
      <Router>
        <NotificationProvider>
          <AuthProvider>
            <CourseContext.Provider value={{ ongoingCourses: courses }}>
              <LoginModule />
            </CourseContext.Provider>
          </AuthProvider>
        </NotificationProvider>
      </Router>
    );
  };

  test('renders login form by default', () => {
    renderLoginModule();
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByText(/don't have an account?/i)).toBeInTheDocument();
  });

  test('switches to sign up form when "Sign Up" is clicked', () => {
    renderLoginModule();
    fireEvent.click(screen.getByText(/sign up/i));
    expect(screen.getByRole('heading', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number \(optional\)/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/already have an account?/i)).toBeInTheDocument();
  });

  test('handles successful login and navigates to dashboard if courses exist', async () => {
    loginUser.mockResolvedValue({ token: 'mockToken', user: { _id: 'testuser', name: 'Test User' } });
    renderLoginModule([{ id: '1', name: 'course' }]);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  test('handles successful login and navigates to home if no courses exist', async () => {
    loginUser.mockResolvedValue({ token: 'mockToken', user: { _id: 'testuser', name: 'Test User' } });
    renderLoginModule([]);

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
    });
  });

  test('handles successful signup and shows profile form', async () => {
    registerUser.mockResolvedValue({ token: 'mockToken' });
    renderLoginModule();

    fireEvent.click(screen.getByText(/sign up/i));
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'newpassword' } });
    fireEvent.change(screen.getByLabelText(/phone number \(optional\)/i), { target: { value: '1234567890' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({
        email: 'new@example.com',
        password: 'newpassword',
        phone: '1234567890',
        name: 'new@example.com',
        age: 18,
        gender: 'Prefer not to say',
        is_student: false,
      });
      expect(screen.getByRole('heading', { name: /complete your profile/i })).toBeInTheDocument();
    });
  });

  test('handles profile save after signup', async () => {
    registerUser.mockResolvedValue({ token: 'mockToken' });
    updateUserProfile.mockResolvedValue({ success: true });
    renderLoginModule();

    // Signup first
    fireEvent.click(screen.getByText(/sign up/i));
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'newpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /complete your profile/i })).toBeInTheDocument();
    });

    // Fill and save profile
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Profile' } });
    fireEvent.change(screen.getByLabelText(/age/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText('Gender'), { target: { value: 'male' } });
    fireEvent.click(screen.getByLabelText(/are you currently in school?/i)); // Check student checkbox
    
    await waitFor(() => {
        fireEvent.change(screen.getByLabelText('Board'), { target: { value: 'cbse' } });
        fireEvent.change(screen.getByLabelText('Class'), { target: { value: '10th' } });
    });


    fireEvent.click(screen.getByRole('button', { name: /save profile/i }));

    await waitFor(() => {
      expect(updateUserProfile).toHaveBeenCalledWith({
        name: 'Test Profile',
        age: '25',
        gender: 'male',
        is_student: true,
        student_details: { board: 'cbse', class: '10th' },
      });
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
    });
  });

  test('displays error message on login failure', async () => {
    loginUser.mockRejectedValue({ response: { data: { msg: 'Invalid Credentials' } } });
    renderLoginModule();

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockedShowNotification).toHaveBeenCalledWith('Invalid Credentials', 'error');
    });
  });

  test('displays error message on signup failure', async () => {
    registerUser.mockRejectedValue({ response: { data: { msg: 'User already exists' } } });
    renderLoginModule();

    fireEvent.click(screen.getByText(/sign up/i));
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
        expect(mockedShowNotification).toHaveBeenCalledWith('User already exists', 'error');
    });
  });

  test('shows notification for social login', () => {
    renderLoginModule();
    fireEvent.click(screen.getByRole('button', { name: /login with google/i }));
    expect(mockedShowNotification).toHaveBeenCalledWith('Social login not yet implemented.', 'info');
  });
});