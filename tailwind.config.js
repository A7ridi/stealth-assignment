/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1597e4",
        "error-color": "#d86161",
        "placeholder-color": "#7a7a7a",
        "dark-font": "#212121",
        "white-font": "#fafafa",
        "card-color": "#ffffff",
        "card-border": "#e6e6e6",
      },
      width: {
        577: "577px",
      },
      height: {
        564: "564px",
      },
    },
  },
  plugins: [],
};
