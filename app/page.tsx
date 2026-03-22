import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
