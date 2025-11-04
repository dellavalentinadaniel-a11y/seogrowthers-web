import typography from '@tailwindcss/typography';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f0f0f',
        'text-light': '#ffffff',
        'text-accent': '#3b82f6',
      },
    },
  },
  plugins: [typography],
};

export default config;
