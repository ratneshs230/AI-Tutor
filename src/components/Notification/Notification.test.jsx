
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { NotificationProvider, useNotification } from './Notification';

// A test component to trigger notifications
const TestComponent = () => {
  const { showNotification } = useNotification();

  return (
    <div>
      <button onClick={() => showNotification('Info message', 'info')}>Show Info</button>
      <button onClick={() => showNotification('Success message', 'success')}>Show Success</button>
      <button onClick={() => showNotification('Error message', 'error')}>Show Error</button>
      <button onClick={() => showNotification('Warning message', 'warning')}>Show Warning</button>
    </div>
  );
};

describe('Notification', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('does not render a notification initially', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    expect(screen.queryByText('Info message')).toBeNull();
  });

  test('shows an info notification', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    fireEvent.click(screen.getByText('Show Info'));

    const notification = screen.getByText('Info message');
    expect(notification).toBeInTheDocument();
    expect(notification).toHaveClass('bg-primary-color');
  });

  test('shows a success notification', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    fireEvent.click(screen.getByText('Show Success'));

    const notification = screen.getByText('Success message');
    expect(notification).toBeInTheDocument();
    expect(notification).toHaveClass('bg-green-600');
  });

  test('shows an error notification', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    fireEvent.click(screen.getByText('Show Error'));

    const notification = screen.getByText('Error message');
    expect(notification).toBeInTheDocument();
    expect(notification).toHaveClass('bg-error-color');
  });

  test('shows a warning notification', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    fireEvent.click(screen.getByText('Show Warning'));

    const notification = screen.getByText('Warning message');
    expect(notification).toBeInTheDocument();
    expect(notification).toHaveClass('bg-yellow-500');
  });

  test('hides the notification after 3 seconds', () => {
    render(
      <NotificationProvider>
        <TestComponent />
      </NotificationProvider>
    );

    fireEvent.click(screen.getByText('Show Info'));

    expect(screen.getByText('Info message')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.queryByText('Info message')).toBeNull();
  });
});
