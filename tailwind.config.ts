import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        secondaryLight: 'var(--secondary-light-color)',
        accent: 'var(--accent-color)',
        accentLight: 'var(--accent-light-color)',
        accentDark: 'var(--accent-dark-color)',
        border: 'var(--border-color)',
      },
    },
  },
  plugins: [],
} satisfies Config;
