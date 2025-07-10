/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,astro,ts,jsx,tsx}"],
  safelist: [
    // Анимации для dropdown
    "opacity-0",
    "opacity-100",
    "scale-95",
    "scale-100",
    "hidden",
    "block",
    "transform",
    "transition",
    "duration-200",
    "duration-300",
    "ease-in-out",
    "origin-top-right",
    "max-h-0",
    "max-h-[400px]",
    "hidden",
    "block",
  ],
  theme: {
    extend: {
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(95%)" },
          "100%": { opacity: "1", transform: "scale(100%)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "scale(100%)" },
          "100%": { opacity: "0", transform: "scale(95%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.2s ease-out forwards",
        "fade-out": "fade-out 0.2s ease-in forwards",
      },
    },
  },
  plugins: [],
};
