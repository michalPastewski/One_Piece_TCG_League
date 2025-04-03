import { Commissioner, Dangrek, Titan_One } from 'next/font/google';

export const titanOne = Titan_One({
  variable: '--font-titan-one',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const commissioner = Commissioner({
  style: ['normal'],
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const dangrek = Dangrek({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
