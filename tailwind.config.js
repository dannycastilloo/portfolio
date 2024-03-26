/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: '#0A0A0A',

        gray1: '#CCCCCC',
        gray2: '#EEEEEE',
        gray3: '#DDDDDD',

        black1: '#3E3E3E',
        black2: '#1E1E1E',

        purple1: '#A747EB',
        purple2: '#9C30E8',

        project1: '#0A0A0A',
        project2: '#281520',

        gradient1: '#5940BF',
        gradient2: '#BF4040',
      },
      fontFamily: {
        lato: ['Lato'],
        archivo: ['Archivo'],
      },
      lineHeight: {
        '14': '4rem',
        '24': '6.5rem',
      },
      width: {
        '112': '28rem',
      }
    },
  },
  plugins: [],
}