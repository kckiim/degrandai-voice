import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { posts } from '@/data/posts';

export const metadata: Metadata = {
  title: 'Blog — DEGRAND.AI',
  description: 'Practical writing on AI, automation, and operations — what works, what doesn\'t, and how to think about it for your business.',
  metadataBase: new URL('https://degrand.ai'),
  openGraph: {
    title: 'Blog — DEGRAND.AI',
    description: 'Practical writing on AI, automation, and operations — what works, what doesn\'t, and how to think about it for your business.',
    url: 'https://degrand.ai/blog',
    siteName: 'DEGRAND.AI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DEGRAND.AI' }],
    type: 'website',
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Nav />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Straight talk on AI and operations.
          </h1>
          <p className="text-gray-400 text-lg mb-16">
            No hype. Just what works, what doesn&apos;t, and how to think about it for your business.
          </p>

          <div className="flex flex-col gap-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-white/8 rounded-2xl p-8 bg-[#111111] hover:border-white/20 transition-colors"
              >
                <span className="text-blue-400 text-xs font-medium tracking-widest uppercase">{post.tag}</span>
                <h2 className="text-xl font-semibold text-white mt-3 mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.teaser}</p>
                <span className="text-gray-600 text-xs">{post.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
