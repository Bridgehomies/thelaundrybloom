import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'The Laundry Bloom',
  description: 'Making Your Fabric Bloom Again',
  icons: {
    icon: [
      // Multiple sizes for different devices
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }, // Scalable SVG
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }, // For Apple devices
    ],
  },
  openGraph: {
    title: 'The Laundry Bloom',
    description: 'Premium laundry care that makes your fabric bloom again.',
    url: 'https://thelaundrybloom.com',  // Replace with your actual domain
    siteName: 'The Laundry Bloom',
    images: [
      {
        url: '/og-image.jpg', // Add an Open Graph image (1200x630)
        width: 1200,
        height: 630,
        alt: 'The Laundry Bloom - Clean Clothes, Curated Living',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Laundry Bloom',
    description: 'Premium laundry care that makes your fabric bloom again.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fdfbf6" />


        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Oxygen:wght@400;700&family=Imprima&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}