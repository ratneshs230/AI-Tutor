import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as a different HTML element when "as" prop is provided', () => {
    render(<Button as="a" href="/test">Link Button</Button>);
    const linkButton = screen.getByText('Link Button');
    expect(linkButton.tagName).toBe('A');
    expect(linkButton).toHaveAttribute('href', '/test');
  });

  test('applies custom props correctly', () => {
    render(<Button data-testid="custom-button">Test Button</Button>);
    expect(screen.getByTestId('custom-button')).toBeInTheDocument();
  });

  test('applies primary variant styles by default', () => {
    render(<Button>Primary Button</Button>);
    const button = screen.getByText('Primary Button');
    expect(button).toHaveClass('bg-blue-600');
    expect(button).toHaveClass('text-white');
  });

  test('applies secondary variant styles', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const button = screen.getByText('Secondary Button');
    expect(button).toHaveClass('bg-gray-200');
    expect(button).toHaveClass('text-gray-800');
  });

  test('applies small size styles', () => {
    render(<Button size="small">Small Button</Button>);
    const button = screen.getByText('Small Button');
    expect(button).toHaveClass('px-3');
    expect(button).toHaveClass('py-1.5');
    expect(button).toHaveClass('text-sm');
  });

  test('applies large size styles', () => {
    render(<Button size="large">Large Button</Button>);
    const button = screen.getByText('Large Button');
    expect(button).toHaveClass('px-6');
    expect(button).toHaveClass('py-3');
    expect(button).toHaveClass('text-lg');
  });

  test('disables button and shows loading spinner when isLoading is true', () => {
    render(<Button isLoading>Loading Button</Button>);
    const button = screen.getByText('Loading Button');
    expect(button).toBeDisabled();
    expect(screen.getByRole('status')).toBeInTheDocument(); // LoadingSpinner has role="status"
  });

  test('disables button when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });
});