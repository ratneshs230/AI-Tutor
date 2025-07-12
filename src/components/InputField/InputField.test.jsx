
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField', () => {
  test('renders with a label', () => {
    render(<InputField label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  test('renders without a label', () => {
    render(<InputField data-testid="input" />);
    expect(screen.getByTestId('input')).toBeInTheDocument();
    expect(screen.queryByLabelText('')).toBeNull();
  });

  test('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<InputField label="Username" onChange={handleChange} />);
    const input = screen.getByLabelText('Username');
    fireEvent.change(input, { target: { value: 'testuser' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays the correct value', () => {
    render(<InputField label="Username" value="testuser" readOnly />);
    const input = screen.getByLabelText('Username');
    expect(input.value).toBe('testuser');
  });

  test('has the correct type', () => {
    render(<InputField label="Password" type="password" />);
    const input = screen.getByLabelText('Password');
    expect(input.type).toBe('password');
  });

  test('is disabled when the disabled prop is true', () => {
    render(<InputField label="Username" disabled />);
    const input = screen.getByLabelText('Username');
    expect(input).toBeDisabled();
  });
});
