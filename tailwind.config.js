module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#C10AE0",
        secondary: "#242424",
      },

      fontFamily: {
        Kalam: ['"Kalam"', "cursive"],
        Poppins: ['"Poppins"', "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
