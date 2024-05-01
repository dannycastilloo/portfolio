/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: '#0A0A0A',

        project1: '#0A0A0A',
        project2: '#281520',

        gradient1: '#5940BF',
        gradient2: '#BF4040',

        neutral50: '#F9FAFB',
        neutral100: '#F3F4F6',
        neutral200: '#E5E7EB',
        neutral300: '#D1D5DB',
        neutral400: '#9CA3AF',
        neutral500: '#6B7280',
        neutral600: '#4B5563',
        neutral700: '#374151',
        neutral800: '#1F2937',
        neutral900: '#111827',

        blue3: '#639AE9',

        brandPrimary: '#2563EB',
      },
      fontFamily: {
        lato: ['Lato'],
        archivo: ['Archivo'],
        raleway: ['Raleway'],
      },
      lineHeight: {
        '18': '5rem',
        '26': '7rem',
        '36': '8rem',
      },
      width: {
        '112': '28rem',
      }
    },
  },
  plugins: [],
}