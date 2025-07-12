
import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  test('renders correctly', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
  });

  test('has accessible text for screen readers', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('applies custom className', () => {
    render(<LoadingSpinner className="my-custom-class" />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('my-custom-class');
  });
});
