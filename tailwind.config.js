/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3f8',
          100: '#e9e6f1',
          200: '#d4ccE4',
          300: '#b8a9d3',
          400: '#9c84bf',
          500: '#7f5cab',
          600: '#5D3891', // Primary
          700: '#4e2f7a',
          800: '#402863',
          900: '#382254',
        },
        accent: {
          50: '#fffceb',
          100: '#fff8c6',
          200: '#fff088',
          300: '#ffe44a',
          400: '#ffd51e',
          500: '#FFD700', // Accent (Gold)
          600: '#e6c500',
          700: '#bf9e00',
          800: '#997900',
          900: '#7a5f0c',
        },
        secondary: {
          50: '#f0f7fa',
          100: '#dcedf5',
          200: '#bfe0ec',
          300: '#95cade',
          400: '#63b0cd',
          500: '#4295b5',
          600: '#377899',
          700: '#30617d',
          800: '#2d5267',
          900: '#284656',
        },
        success: {
          500: '#10b981',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        }
      },
      fontFamily: {
        'heading': ['"Playfair Display"', 'serif'],
        'body': ['"Work Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};