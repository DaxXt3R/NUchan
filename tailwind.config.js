/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: ["./views/**/*", "./public/scripts/*"],
  theme: {
    extend: {
      fontFamily: { spline: ["Spline Sans", "sans-serif"] },
      colors: {
        theme: {
          bg:"var(--color-bg)",
          bgPrimary:"var(--color-bg-primary)",
          bgSecond:"var(--color-bg-second)",
          bgAccent:"var(--color-bg-accent)",
          
          postPrimary:"var(--color-post-primary)",
          postSecond:"var(--color-post-second)",
          
          textPrimary:"var(--color-text-primary)",
          textInverted:"var(--color-text-inverted)",
          textSecond:"var(--color-text-second)",
          textMuted:"var(--color-text-muted)",
          textAccent:"var(--color-text-accent)",
          textLink:"var(--color-text-link)",
          textGreen:"var(--color-text-green)",

          hover:"var(--color-hover)",
        }
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
