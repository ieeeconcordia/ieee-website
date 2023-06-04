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
        'footer-bg': '#002333',
        'footer-fd': '#FFFFFF',
        'tertiary': '#FFD100',
        'title-gray': '#5F5F5F',
        'sponsorship': '#006999',
      },
      backgroundImage: {
        'execTeam': 'url(https://s3-alpha-sig.figma.com/img/4793/ca56/9324685e4c71189c3a04a54f85383905?Expires=1686528000&Signature=Xf~SGEPtJMf5gh4Rc5EByHEI9d15UWcMHXEdvslpC~e3jnv00VyXAEfAQwiUb8eOZs3KxnPe6gVUlPgKemnLYrtkYcD0zofLXPg9rRR6yjkNhzYTtsEVbOnDT2QjCkatoXMxPHWgIZ2Yqi7EdWdQ2SMHbD22cWxYCBNyHnK1CT~E6lUecTmyXjWPE8aM5KDFmUGviVC6lLyUSes66XZzSJyy56PPgXgHzNgDkFp0UeOPZGCscK6PvgqzUiFV-OfY5HWiKlxrx84RyUcUXDPcPjfCf~cI3WKST3qUbWXbORPNo0tSfx4E5rfWGL0NBMhMwlytUBH63f2GpMFrYcZz0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
      }
    },
  },
  plugins: [],
};
