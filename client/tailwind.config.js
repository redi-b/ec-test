/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          default: "#EFB34C",
          light: "#FAD79A",
        },
        btn: {
          brown: "#BC8741",
          green: "#D2DF56",
        },
        bg: "#F5F4E8",
      },
      boxShadow: {
        nav: "0px 8px 5px -4px #00000024",
        card: "0px 5px 10px 8px #00000024",
        filter: "0 3px 10px rgb(0,0,0,0.2);",
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "832px",
        lg: "1024px",
        xl: "1200px"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
