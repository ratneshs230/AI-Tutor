import React from 'react';

const LoadingSpinner = ({ className }) => {
  return (
    <div className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary-color ${className}`} role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
