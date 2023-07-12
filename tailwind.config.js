const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        NAVBAR_COLOR: '#1f1f39',
        HOMEPAGE_BGCOLOR: '#19192e',
        MANIFESTO_COLOR: '#eea86c',
        SIGNIN_BGCOLOR: '#9393aa',
        SIGNIN_FORM_BGCOLOR: '#f5f5f5',
        SAVE_AND_SIGN_BUTTON_COLOR: '#838bc8',
      },
      fontFamily: {
        oldStandard: '--font-old-standard-tt',
        openSans: '--font-open-sans',
        montserrat: '--font-montserrat',
        inter: '--font-inter',
      },
      backgroundImage: {
        signinSkyline: url('/signin-skyline.svg'),
      },
    },
  },
  plugins: [],
};
