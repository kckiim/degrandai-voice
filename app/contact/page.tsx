import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact — DEGRAND.AI',
  description: 'Got a workflow problem? Talk to us. No pitch, no pressure — just a straight conversation about what\'s slowing your business down and whether we can help.',
  metadataBase: new URL('https://degrand.ai'),
  openGraph: {
    title: 'Contact — DEGRAND.AI',
    description: 'Got a workflow problem? Talk to us. No pitch, no pressure — just a straight conversation about what\'s slowing your business down and whether we can help.',
    url: 'https://degrand.ai/contact',
    siteName: 'DEGRAND.AI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DEGRAND.AI' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — DEGRAND.AI',
    description: 'Got a workflow problem? Talk to us. No pitch, no pressure — just a straight conversation about what\'s slowing your business down and whether we can help.',
    images: ['/og-image.png'],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
