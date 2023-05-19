module.exports = {
  theme: {
    extend: {
      colors: {
        nintendoScheme: {
          darkGrey: "#a5a2a2",
          lightGrey: "#e5e5e5",
          white: "#ffffff",
          red: "#dd2020",
          black: "#0d0c0c",
        },
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
      },
    },
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
