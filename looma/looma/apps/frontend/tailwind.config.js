/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ghibli palette mapped to CSS variables (defined in app/globals.css)
        'ghibli-sky': 'var(--ghibli-sky)',
        'ghibli-blue': 'var(--ghibli-blue)',
        'ghibli-cream': 'var(--ghibli-cream)',
        'ghibli-peach': 'var(--ghibli-peach)',
        'ghibli-pink': 'var(--ghibli-pink)',
        'ghibli-lavender': 'var(--ghibli-lavender)',
        'ghibli-grass': 'var(--ghibli-grass)',
        'ghibli-forest': 'var(--ghibli-forest)',
        'ghibli-earth': 'var(--ghibli-earth)',
        'ghibli-white': 'var(--ghibli-white)',
        'ghibli-gray': 'var(--ghibli-gray)',
        'ghibli-dark': 'var(--ghibli-dark)',
        'ghibli-charcoal': 'var(--ghibli-charcoal)',
        'ghibli-mint': 'var(--ghibli-mint, #A8D5BA)', // fallback
        'ghibli-accent': 'var(--accent-gold)',
      },
      borderRadius: {
        xl: 'var(--radius)'
      }
    },
  },
  plugins: [],
};
