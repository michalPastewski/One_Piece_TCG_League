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
        opacityBg: 'var(--opacity-background)',
        foreground: 'var(--foreground)',

        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        secondaryLight: 'var(--secondary-light-color)',
        accent: 'var(--accent-color)',
        accentLight: 'var(--accent-light-color)',
        accentDark: 'var(--accent-dark-color)',
        border: 'var(--border-color)',
        shadow: 'var(--shadow-color:)',
        warning: 'var(--warning-color)',
        error: 'var(--error-color)',
        success: 'var(--success-color)',
        disabled: 'var(--disabled-color)',

      },
      fontFamily: {
        titanOne: ['var(--font-titan-one)'],
        commissioner: ['var(--font-commissioner)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
