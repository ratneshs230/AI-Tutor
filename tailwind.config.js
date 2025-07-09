/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-color-hover': 'var(--primary-color-hover)',
        'background-color': 'var(--background-color)',
        'surface-color': 'var(--surface-color)',
        'text-color': 'var(--text-color)',
        'text-color-secondary': 'var(--text-color-secondary)',
        'border-color': 'var(--border-color)',
        'error-color': 'var(--error-color)',
      },
      spacing: {
        'spacing-unit': 'var(--spacing-unit)',
        'spacing-xs': 'var(--spacing-xs)',
        'spacing-sm': 'var(--spacing-sm)',
        'spacing-md': 'var(--spacing-md)',
        'spacing-lg': 'var(--spacing-lg)',
        'spacing-xl': 'var(--spacing-xl)',
      },
      borderRadius: {
        'border-radius': 'var(--border-radius)',
      },
    },
  },
  plugins: [],
}