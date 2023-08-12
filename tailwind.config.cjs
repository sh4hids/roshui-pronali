/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Li Ador Noirrit', ...defaultTheme.fontFamily.sans],
        display: ['Li Sirajee Sheikh Unicode', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        chilli: {
          50: '#FFEAEE',
          100: '#FFD4DC',
          200: '#FFBBC7',
          300: '#FD97A5',
          400: '#F3677A',
          500: '#E03041',
          600: '#CB1B36',
          700: '#AC132F',
          800: '#79122B',
          900: '#521123',
        },
        pablo: {
          50: '#FDFDFD',
          100: '#F8F7EF',
          200: '#F0EFDE',
          300: '#E0DFC6',
          400: '#BEBCA2',
          500: '#767562',
          600: '#525242',
          700: '#3A392D',
          800: '#28281E',
          900: '#1C1C14',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      lineHeight: {
        15: '3.75rem',
        14: '3.5rem',
        13: '3.25rem',
        12: '3rem',
        11: '2.75rem',
      },
      fontSize: {
        xs: ['1rem', '1.5rem'],
        sm: ['1.125rem', '1.75rem'],
        base: ['1.25rem', '2rem'],
        lg: ['1.5rem', '2.25rem'],
        xl: ['1.625rem', '2.5rem'],
        '2xl': ['1.875rem', '2.75rem'],
        '3xl': ['2.125rem', '3rem'],
        '4xl': ['2.375rem', '3.25rem'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
