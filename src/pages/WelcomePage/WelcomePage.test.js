import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import { AuthContext } from '../../context/AuthContext';
import { CourseContext } from '../../context/CourseContext';

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

const renderWelcomePage = (authContextValue, courseContextValue) => {
  render(
    <Router>
      <AuthContext.Provider value={authContextValue}>
        <CourseContext.Provider value={courseContextValue}>
          <WelcomePage />
        </CourseContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

describe('WelcomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test Case 1: Not Logged In
  test('renders Login and Curiosity buttons when not logged in', () => {
    const authContextValue = { isLoggedIn: false };
    const courseContextValue = { ongoingCourses: [] };
    renderWelcomePage(authContextValue, courseContextValue);

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /curiosity/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /add course/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /continue/i })).not.toBeInTheDocument();
  });

  // Test Case 2: Logged In, No Courses
  test('renders Add Course and Curiosity buttons when logged in but no courses', () => {
    const authContextValue = { isLoggedIn: true };
    const courseContextValue = { ongoingCourses: [] };
    renderWelcomePage(authContextValue, courseContextValue);

    expect(screen.getByRole('button', { name: /add course/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /curiosity/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /login/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /continue/i })).not.toBeInTheDocument();
  });

  // Test Case 3: Logged In, One Course
  test('renders Continue and Curiosity buttons when logged in with one course', () => {
    const authContextValue = { isLoggedIn: true };
    const courseContextValue = { ongoingCourses: [{ id: 'c1', name: 'Course 1' }] };
    renderWelcomePage(authContextValue, courseContextValue);

    expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /curiosity/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /login/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /add course/i })).not.toBeInTheDocument();
  });

  // Test Case 4: Logged In, Multiple Courses (Dropdown)
  test('renders Continue dropdown and Curiosity button when logged in with multiple courses', () => {
    const authContextValue = { isLoggedIn: true };
    const courseContextValue = {
      ongoingCourses: [
        { id: 'c1', name: 'Course 1' },
        { id: 'c2', name: 'Course 2' },
      ],
    };
    renderWelcomePage(authContextValue, courseContextValue);

    expect(screen.getByLabelText(/continue/i)).toBeInTheDocument(); // Dropdown
    expect(screen.getByRole('button', { name: /curiosity/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /login/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /add course/i })).not.toBeInTheDocument();
  });

  // Test Case 5: Navigation - Login button
  test('navigates to /login when Login button is clicked', () => {
    const authContextValue = { isLoggedIn: false };
    const courseContextValue = { ongoingCourses: [] };
    renderWelcomePage(authContextValue, courseContextValue);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login');
  });

  // Test Case 6: Navigation - Add Course button
  test('navigates to /add-course when Add Course button is clicked', () => {
    const authContextValue = { isLoggedIn: true };
    const courseContextValue = { ongoingCourses: [] };
    renderWelcomePage(authContextValue, courseContextValue);

    fireEvent.click(screen.getByRole('button', { name: /add course/i }));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/add-course');
  });

  // Test Case 7: Navigation - Curiosity button
  test('navigates to /curiosity-platform when Curiosity button is clicked', () => {
    const authContextValue = { isLoggedIn: false };
    const courseContextValue = { ongoingCourses: [] };
    renderWelcomePage(authContextValue, courseContextValue);

    fireEvent.click(screen.getByRole('button', { name: /curiosity/i }));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/curiosity-platform');
  });

  // Test Case 8: Navigation - Continue button (single course)
  test('navigates to /dashboard when Continue button (single course) is clicked', () => {
    const authContextValue = { isLoggedIn: true };
    const courseContextValue = { ongoingCourses: [{ id: 'c1', name: 'Course 1' }] };
    renderWelcomePage(authContextValue, courseContextValue);

    fireEvent.click(screen.getByRole('button', { name: /continue/i }));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
  });

  // Test Case 9: Navigation - Continue dropdown (multiple courses)
  test('navigates to /dashboard when a course is selected from Continue dropdown', async () => {
    const authContextValue = { isLoggedIn: true };
    const courseContextValue = {
      ongoingCourses: [
        { id: 'c1', name: 'Course 1' },
        { id: 'c2', name: 'Course 2' },
      ],
      setCurrentCourse: jest.fn(),
    };
    renderWelcomePage(authContextValue, courseContextValue);

    const dropdown = screen.getByLabelText(/continue/i);
    fireEvent.change(dropdown, { target: { value: 'c2' } });

    await waitFor(() => {
      expect(courseContextValue.setCurrentCourse).toHaveBeenCalledWith('c2');
      expect(mockedUsedNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });
});
