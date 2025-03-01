import type { Metadata } from 'next';
import { Geist, Geist_Mono, Ms_Madi } from 'next/font/google';
import { Navigation } from '@/components/views/navigation/navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="w-full relative top-[60px] mx-auto">
          {children}
          </main>
        <footer className="absolute bottom-0">FOOTER</footer>
      </body>
    </html>
  );
}
