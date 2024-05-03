/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   poppins: ['var(--font-poppins)']
      // },
      colors: {
        primary: {
          main: "#010624",
          dark: "#0B102D",
          back:"#151A35"
        },
        secondary: {
          main: "#007EC5",
          dark: "#092245",
        },
        red: "#FF165C",
      },
    },
    plugins: [],
  },
};
