
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  test('renders with a label', () => {
    render(<Checkbox label="Remember Me" />);
    expect(screen.getByLabelText('Remember Me')).toBeInTheDocument();
  });

  test('renders without a label', () => {
    render(<Checkbox data-testid="checkbox" />);
    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    expect(screen.queryByLabelText('')).toBeNull();
  });

  test('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Test Checkbox" onChange={handleChange} />);
    const checkbox = screen.getByLabelText('Test Checkbox');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('is checked when the checked prop is true', () => {
    render(<Checkbox label="Test Checkbox" checked readOnly />);
    const checkbox = screen.getByLabelText('Test Checkbox');
    expect(checkbox).toBeChecked();
  });

  test('is not checked when the checked prop is false', () => {
    render(<Checkbox label="Test Checkbox" checked={false} readOnly />);
    const checkbox = screen.getByLabelText('Test Checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('is disabled when the disabled prop is true', () => {
    render(<Checkbox label="Test Checkbox" disabled />);
    const checkbox = screen.getByLabelText('Test Checkbox');
    expect(checkbox).toBeDisabled();
  });
});
