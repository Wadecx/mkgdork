import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './animations/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
      '3xl': '1921px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#41267E',
          darker: '#FFFFFF',
          light: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          darker: '#FFFFFF',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'Montserrat'],
      },
      keyframes: {
        heart: {
          '0%': {
            transform: 'scale(0.90)',
          },
          '50%': {
            transform: 'scale(1)',
          },
          '100%': {
            transform: 'scale(0.90)',
          },
        },
      },
      animation: {
        heart: 'heart 1s ease-in-out infinite',
      },
      maxWidth: {
        '9/10': '90%',
        '8/10': '80%',
      },
    },
  },
  plugins: [],
};
export default config;
