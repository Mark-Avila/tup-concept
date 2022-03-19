module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.html", "./src/**/*.js", "index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "tup-red": "#C21E3A",
        "tup-dark": "#590C19",
      },
      fontFamily: {
        oswald: "'Oswald', serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
