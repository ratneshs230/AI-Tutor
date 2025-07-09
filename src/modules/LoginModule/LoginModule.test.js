import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../../src/context/AuthContext';
import LoginModule from './LoginModule';
import { loginUser, registerUser, updateUserProfile } from '../../../src/utils/api';

// Mock the API calls
jest.mock('../../../src/utils/api', () => ({
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

describe('LoginModule', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLoginModule = () => {
    render(
      <Router>
        <AuthProvider>
          <LoginModule />
        </AuthProvider>
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

  test('handles successful login', async () => {
    api.loginUser.mockResolvedValue({ token: 'mockToken', user: { _id: 'testuser', name: 'Test User' } });
    renderLoginModule();

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(loginUser).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  test('handles successful signup and shows profile form', async () => {
    registerUser.mockResolvedValue({ token: 'mockToken', user: { _id: 'newuser', name: 'New User' } });
    renderLoginModule();

    fireEvent.click(screen.getByText(/sign up/i));
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'newpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith({ email: 'new@example.com', password: 'newpassword' });
      expect(screen.getByRole('heading', { name: /complete your profile/i })).toBeInTheDocument();
    });
  });

  test('handles profile save after signup', async () => {
    registerUser.mockResolvedValue({ token: 'mockToken', user: { _id: 'newuser', name: 'New User' } });
    updateUserProfile.mockResolvedValue({ success: true });
    renderLoginModule();

    fireEvent.click(screen.getByText(/sign up/i));
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'new@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'newpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /complete your profile/i })).toBeInTheDocument();
    });

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Test Profile' } });
    fireEvent.change(screen.getByLabelText(/age/i), { target: { value: '25' } });
    fireEvent.change(screen.getByLabelText(/gender/i), { target: { value: 'male' } });
    fireEvent.click(screen.getByLabelText(/are you currently in school?/i)); // Check student checkbox
    fireEvent.change(screen.getByLabelText(/board/i), { target: { value: 'cbse' } });
    fireEvent.change(screen.getByLabelText(/class/i), { target: { value: '10th' } });

    fireEvent.click(screen.getByRole('button', { name: /save profile/i }));

    await waitFor(() => {
      expect(updateUserProfile).toHaveBeenCalledWith({
        name: 'Test Profile',
        age: 25,
        gender: 'male',
        is_student: true,
        student_details: {
          board: 'cbse',
          class: '10th',
        },
      });
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  test('displays error message on login failure', async () => {
    api.loginUser.mockRejectedValue(new Error('Invalid credentials'));
    renderLoginModule();

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'wrong@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
    });
  });

  test('simulates social login and shows profile form', async () => {
    renderLoginModule();
    fireEvent.click(screen.getByRole('button', { name: /login with google/i }));

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /complete your profile/i })).toBeInTheDocument();
    });
  });
});
