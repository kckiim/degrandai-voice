import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'DEGRAND.AI — AI & Automation Consulting',
  description: 'We help businesses run leaner using AI and automation. Ops background, real builds, no slide decks.',
  metadataBase: new URL('https://degrand.ai'),
  openGraph: {
    title: 'DEGRAND.AI — AI & Automation Consulting',
    description: 'We help businesses run leaner using AI and automation. Ops background, real builds, no slide decks.',
    url: 'https://degrand.ai',
    siteName: 'DEGRAND.AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DEGRAND.AI — AI & Automation Consulting',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEGRAND.AI — AI & Automation Consulting',
    description: 'We help businesses run leaner using AI and automation. Ops background, real builds, no slide decks.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
