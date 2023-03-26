/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],

  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#98c429",

          "secondary": "#596ebf",

          "accent": "#aa36d1",

          "neutral": "#1B1F22",

          "base-100": "#F3F1F8",

          "info": "#A5B1EE",

          "success": "#67DA9F",

          "warning": "#DF9307",

          "error": "#F6374E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
