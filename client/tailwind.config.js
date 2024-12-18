/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#537cd9',
        secondary: '#fdfdfe',
        accent: '#ffb300',
        neutral: '#000',
        btn1: '#ffb300',
        btn2: '#537cd9',
        link1bg: '#D5E3E',
        link1: '#374B5C',
        overlay: '#374b5c',
        bgAccent: "#d5e3ee",
        textAccent: "#374b5c",
        sectionBg: "#f8f1fd",
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4.25rem'
      }
    },
  },
  plugins: [],
}