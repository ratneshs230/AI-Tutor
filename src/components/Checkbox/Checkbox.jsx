import React from 'react';

const Checkbox = ({ label, className, ...props }) => {
  return (
    <label className={`inline-flex items-center cursor-pointer ${className}`}>
      <input
        type="checkbox"
        className="appearance-none h-5 w-5 border border-border-color rounded checked:bg-primary-color checked:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-color focus:ring-offset-2 transition duration-150 ease-in-out bg-surface-color cursor-pointer"
        {...props}
      />
      {label && <span className="ml-2 text-text-color-secondary">{label}</span>}
    </label>
  );
};

export default Checkbox;
