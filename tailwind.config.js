/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*"],
  theme: {
    extend: {
      fontFamily: { spline: ["Spline Sans", "sans-serif"] },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
