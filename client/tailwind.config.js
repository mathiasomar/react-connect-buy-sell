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
        dark: "#333333",
        btn1: '#ffb300',
        btn2: '#537cd9',
        bgLink: '#D5E3EE',
        linkText: '#374B5C',
        overlay: '#374b5c',
        bgAccent: "#d5e3ee",
        textAccent: "#374b5c",
        sectionBg: "#f8fafd",
        bgLight: "#f2f4f8",
        fadeText: "#73818C",
        pageBg: "#EEF7FF",
        textColor1: "#0F172A",
        textColor2: "#64748B",
        textColor3: "#475569",
        textColor4: "#5E5E5E",
        textColor5: "#334155",
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
        '5xl': '2.625rem',
        '6xl': '3rem',
        '7xl': '4.25rem'
      }
    },
  },
  plugins: [],
}