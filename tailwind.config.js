/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver': '#F5F7FA',
        'neutralDGrey' : '#4D4D4D',
        'brandPrimary' : '#4CAF4F',
        'neutralGrey'  : '#717171',
        'gray900'      : '#18191F'
      },
      fontFamily: {
        inter: 'Inter Variable, sans-serif',
    },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

