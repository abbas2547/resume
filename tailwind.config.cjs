/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#f8fafc',
        'bg-secondary': '#ffffff',
        panel: '#ffffff',
        'accent-start': '#2563eb',
        'accent-end': '#60a5fa',
        'primary': '#2563eb',
        'text-primary': '#0f172a',
        'text-secondary': '#64748b',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 30px rgba(2,6,23,0.06)',
      },
    },
  },
  plugins: [],
};
