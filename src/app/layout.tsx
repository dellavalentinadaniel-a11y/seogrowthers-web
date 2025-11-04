import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import CookieBanner from '@/components/CookieBanner';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export { metadata } from './metadata';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-bTTEQbYQ1YGXBF2fPpXL8nuSUXGMWzME2YkdE+5EYXPLk6l2b7xvFeoJEB6Dig0Kk3D6Z0fjQX+0+7w3r6tW5g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-dark-bg text-text-light">
        <SiteHeader />
        <main className="flex-grow">{children}</main>
        <CookieBanner />
        <SiteFooter />
      </body>
    </html>
  );
}
