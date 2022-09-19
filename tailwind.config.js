/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "940px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "640px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        primary: "#33d172",
      },
      fontFamily: {
        sans: ["Quicksand", "arial"],
      },
      fontSize: {
        sm: "13.5px",
        xs: "12px",
        md: "14px",
      },
    },
  },
  plugins: [],
};
