/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        NAVBAR_COLOR: "#1f1f39",
        HOMEPAGE_BGCOLOR: "#19192e",
        MANIFESTO_COLOR: "#eea86c",
      },
      fontFamily: {
        oldStandard: "--font-old-standard-tt",
        openSans: "--font-open-sans",
        montserrat: "--font-montserrat",
        inter: "--font-inter",
      },
    },
  },
  plugins: [],
};
