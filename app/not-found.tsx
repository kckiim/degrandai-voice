import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-6xl font-bold text-blue-400 mb-4">404</h1>
      <p className="text-gray-400 mb-8">Page not found.</p>
      <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
        Back to home →
      </Link>
    </div>
  );
}
