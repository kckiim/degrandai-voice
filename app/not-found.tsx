import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <main className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">404</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Page not found.</h1>
        <p className="text-gray-400 mb-10 max-w-md">
          This page doesn&apos;t exist or was moved. Head back to the homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
