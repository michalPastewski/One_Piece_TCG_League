import { commissioner } from '@/assets/fonts';
import { Footer } from '@/components/views/footer';
import { Navigation } from '@/components/views/navigation/navigation';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import './globals.css';

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${commissioner.className} antialiased`}>
          <Navigation />
          <div id="container" className="w-full py-[60px] mx-auto">
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
