import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Demo from '@/components/Demo';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
