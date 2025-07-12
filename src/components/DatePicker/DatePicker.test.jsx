
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  test('renders with a label', () => {
    render(<DatePicker label="Select Date" />);
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });

  test('renders without a label', () => {
    render(<DatePicker data-testid="datepicker" />);
    expect(screen.getByTestId('datepicker')).toBeInTheDocument();
    expect(screen.queryByLabelText('')).toBeNull();
  });

  test('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<DatePicker label="Select Date" onChange={handleChange} />);
    const datepicker = screen.getByLabelText('Select Date');
    fireEvent.change(datepicker, { target: { value: '2025-12-25' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays the correct value', () => {
    render(<DatePicker label="Select Date" value="2025-07-09" readOnly />);
    const datepicker = screen.getByLabelText('Select Date');
    expect(datepicker.value).toBe('2025-07-09');
  });

  test('is disabled when the disabled prop is true', () => {
    render(<DatePicker label="Select Date" disabled />);
    const datepicker = screen.getByLabelText('Select Date');
    expect(datepicker).toBeDisabled();
  });
});
