import { Footer } from '@/components/views/footer';
import { Navigation } from '@/components/views/navigation/navigation';
import type { Metadata } from 'next';
import { Commissioner, Dangrek, Titan_One } from 'next/font/google';
import './globals.css';

const titanOne = Titan_One({
  variable: '--font-titan-one',
  weight: '400',
  subsets: ['latin'],
});

const commissioner = Commissioner({
  variable: '--font-commissioner',
  weight: '400',
  subsets: ['latin'],
});

const dangrek = Dangrek({
  variable: '--font-dangrek',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'One Piece League',
  description: 'One Piece TCG League is a community of One Piece TCG players.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${commissioner.variable} ${dangrek.variable} ${titanOne.variable} antialiased`}>
        <Navigation />
        <div id="container" className="w-full py-[60px] mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
