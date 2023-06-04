/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'container': '1.5rem',
        'section': '12rem',
      },
      fontSize: {
        'display-l': '3.75rem',
        'display-m': '3rem',
        'display-s': '1.5rem',
        'headline-l': '2.25rem',
        'headline-m': '2rem',
        'headline-s': '1.5rem',
        'title-l': '1.5rem',
        'title-m': '1.25rem',
        'title-s': '1rem',
        'label-l': '1rem',
        'label-m': '0.875rem',
        'label-s': '0.75rem',
        'body-l': '1rem',
        'body-m': '0.875rem',
        'body-s': '0.75rem',
      },
      fontFamily: {
        'raleway': 'var(--font-raleway)',
        'lora': 'var(--font-lora)', 
      },
      colors: {
        'primary': '#33BEFF',
        'secondary': '#093774',
        'footer': '#093774',
        'tertiary': '#FFD100',
        'title-gray': '#5F5F5F',
        'sponsorship': '#006999',
      }
    },
  },
  plugins: [],
};
