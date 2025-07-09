import React from 'react';
import classNames from 'classnames';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Button = ({
  children,
  as: Component = 'button',
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-colors duration-200 ease-in-out rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary-color text-white hover:bg-primary-color-hover focus:ring-primary-color',
    secondary: 'bg-surface-color text-text-color border border-border-color hover:bg-gray-100 focus:ring-primary-color',
    outline: 'bg-transparent border border-primary-color text-primary-color hover:bg-primary-color-hover hover:bg-opacity-10 focus:ring-primary-color',
    ghost: 'bg-transparent text-primary-color hover:bg-primary-color-hover hover:bg-opacity-10 focus:ring-primary-color',
    danger: 'bg-error-color text-white hover:bg-red-700 focus:ring-error-color',
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed';

  const combinedClassName = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
    {
      [disabledStyles]: disabled || isLoading,
    }
  );

  return (
    <Component
      className={combinedClassName}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <LoadingSpinner className="mr-2 h-4 w-4" />}
      {children}
    </Component>
  );
};

export default Button;
