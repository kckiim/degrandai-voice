import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/data/posts';

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link href="/blog">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4 hover:text-blue-300 transition-colors cursor-pointer">
              Blog
            </p>
          </Link>
          <Link href="/blog">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 hover:text-blue-400 transition-colors cursor-pointer">
              From the Blog
            </h2>
          </Link>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Practical writing on AI, automation, and building better operations — no fluff, no filler.
          </p>
        </div>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-[#111111] border border-white/8 rounded-2xl overflow-hidden hover:border-white/20 transition-colors group"
            >
              {post.image && (
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-8">
                <span className="inline-block text-xs font-medium text-gray-500 bg-white/5 border border-white/8 rounded-full px-3 py-1 mb-6">
                  {post.tag}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">{post.teaser}</p>
                <p className="text-gray-600 text-xs">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="border-t border-white/5 pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors gap-2"
          >
            View all posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
