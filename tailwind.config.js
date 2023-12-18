/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      gridTemplateAreas: {
        "Companies-md": [
          "item-1 item-2 item-3",
          "item-4 item-5 item-6",
          "item-7 item-7 item-8 item-8",
        ],
      },
      gridTemplateColumns: {
        layout: "1fr 1fr 1fr",
      },

      colors: {
        secondary: "#8C82FC",
        headings: " #22293E",
        paragraphs: "#222831",
        "nav-link": "#394360",
        "sub-secondary": "#44E4C9",
        f8: "#F8F8FF",
        "bg-filter": "rgba(0,0,0,55%)",
      },
      backgroundImage: {
        "bg-pattern": "url('../public/img/bg.png')",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
