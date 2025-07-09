import React from 'react';

const DatePicker = ({ label, value, onChange, className, ...props }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-text-color text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <input
        type="date"
        className="shadow-sm border border-border-color rounded-md w-full py-2 px-3 bg-surface-color text-text-color leading-tight focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default DatePicker;
