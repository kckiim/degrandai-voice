import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import HashScrollHandler from "@/components/HashScrollHandler";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'DEGRAND.AI — AI & Automation Consulting',
  description: 'K.C. deGregory helps businesses run leaner using AI and automation. Ops background, real builds, no slide decks.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <HashScrollHandler />
        {children}
      </body>
    </html>
  );
}
