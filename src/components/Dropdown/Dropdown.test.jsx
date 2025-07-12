
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  test('renders with a label', () => {
    render(<Dropdown label="Select an option" options={options} />);
    expect(screen.getByLabelText('Select an option')).toBeInTheDocument();
  });

  test('renders without a label', () => {
    render(<Dropdown options={options} data-testid="dropdown" />);
    expect(screen.getByTestId('dropdown')).toBeInTheDocument();
    expect(screen.queryByLabelText('')).toBeNull();
  });

  test('renders all options', () => {
    render(<Dropdown label="Select an option" options={options} />);
    const optionElements = screen.getAllByRole('option');
    expect(optionElements.length).toBe(options.length);
    optionElements.forEach((option, index) => {
      expect(option.value).toBe(options[index].value);
      expect(option.textContent).toBe(options[index].label);
    });
  });

  test('handles onChange event', () => {
    const handleChange = jest.fn();
    render(<Dropdown label="Select an option" options={options} onChange={handleChange} />);
    const dropdown = screen.getByLabelText('Select an option');
    fireEvent.change(dropdown, { target: { value: '2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('displays the correct value', () => {
    render(<Dropdown label="Select an option" options={options} value="2" readOnly />);
    const dropdown = screen.getByLabelText('Select an option');
    expect(dropdown.value).toBe('2');
  });

  test('is disabled when the disabled prop is true', () => {
    render(<Dropdown label="Select an option" options={options} disabled />);
    const dropdown = screen.getByLabelText('Select an option');
    expect(dropdown).toBeDisabled();
  });
});
