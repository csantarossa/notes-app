/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#09090B",
          secondary: "#f4f4f5",
          accent: "#505050",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
