/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#5662f6",
        primaryLight: "#7d86f7",
      },
      screens: {
        xl: {max: "1279px"},
        lg: {max: "1023px"},
        md: {max: "767px"},
        sm: {max: "639px"},
      },
    },
  },
  plugins: [],
}

