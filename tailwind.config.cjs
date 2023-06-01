/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Li Ador Noirrit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
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
        11.5: '2.875rem',
        15: '3.75rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
