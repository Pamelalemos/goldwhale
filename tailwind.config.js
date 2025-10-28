// tailwind.config.js

/** @type {import('tailwindcss').Config} */

function addUtilities({ addUtilities, theme }) {
  addUtilities({
    '.text-shadow-pixel': {
      'text-shadow': theme('textShadow.pixel'),
    },
    '.text-shadow-pixel-lg': {
      'text-shadow': theme('textShadow.pixel-lg'),
    },
  });
}
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1E40AF',  
        'brand-red': '#B91C1C',    
        'brand-white': '#FFFFFF',  
        'brand-light': '#F3F4F6', 
        'brand-gold': '#FBBF24',   
        'brand-dark': '#111827',   
      },
      fontFamily: {
        
        pixel: ['var(--font-press-start)'],
      },
      boxShadow: {
        'pixel': '4px 4px 0px #222222',
        'pixel-hover': '6px 6px 0px #222222',
      },

       textShadow: {
      'pixel': '2px 2px 0px #111827', 
      'pixel-lg': '4px 4px 0px #111827', 
    }
    },
  },
  plugins: [addUtilities],
}