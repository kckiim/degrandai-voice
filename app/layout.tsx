import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Voice Agent for Trades Businesses | Degrand',
  description: 'Never miss a call again. An AI voice agent that answers 24/7, books appointments, and handles customer questions — built for HVAC, plumbing, and electrical businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
