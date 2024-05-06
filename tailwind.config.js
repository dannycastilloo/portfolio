/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: '#2A2A2A',

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

        brand50: '#EFF6FF',
        brand100: '#DBEAFE',
        brand200: '#BFDBFE',
        brand300: '#93C5FD',
        brand400: '#60A5FA',
        brand500: '#3B82F6',
        brand600: '#2563EB',
        brand700: '#1D4ED8',
        brand800: '#1E40AF',
        brand900: '#1E3A8A',

        error50: '#FEF2F2',
        error100: '#FEE2E2',
        error200: '#FECACA',
        error300: '#FCA5A5',
        error400: '#F87171',
        error500: '#EF4444',
        error600: '#DC2626',
        error700: '#B91C1C',
        error800: '#991B1B',
        error900: '#7F1D1D',

        warning50: '#FEFCE8',
        warning100: '#FEF9C3',
        warning200: '#FEF08A',
        warning300: '#FDE047',
        warning400: '#FACC15',
        warning500: '#EAB308',
        warning600: '#CA8A04',
        warning700: '#A16207',
        warning800: '#854D0E',
        warning900: '#713F12',

        success50: '#F0FDF4',
        success100: '#DCFCE7',
        success200: '#BBF7D0',
        success300: '#86EFAC',
        success400: '#4ADE80',
        success500: '#22C55E',
        success600: '#16A34A',
        success700: '#15803D',
        success800: '#166534',
        success900: '#14532D',

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