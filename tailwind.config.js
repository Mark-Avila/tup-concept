module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.html", "./src/**/*.js"],
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
      backgroundImage: {
        "layer-pattern": "url('../public/assets/layered-waves-haikei.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
