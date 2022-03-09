module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tup-red": "#C21E3A",
      },
      fontFamily: {
        oswald: "'Oswald', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
