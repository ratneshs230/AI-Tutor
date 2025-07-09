import React from 'react';

const Dropdown = ({ label, options, className, ...props }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-text-color text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <select
        className="shadow-sm border border-border-color rounded-md w-full py-2 px-3 bg-surface-color text-text-color leading-tight focus:outline-none focus:ring-2 focus:ring-primary-color focus:border-transparent"
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;