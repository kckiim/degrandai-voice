'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Proof of Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What We Build
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            This is what we build to stay sharp and prove the work.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-16" />

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group bg-[#111111] border border-white/8 rounded-2xl p-8 hover:border-blue-500/25 transition-all duration-300 flex flex-col"
            >
              <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-6 self-start">
                {p.tag}
              </span>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-1">{p.teaser}</p>
              <div className="flex items-center gap-1 mt-6 text-blue-400 text-sm font-medium">
                View project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Closing */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            This is what we do outside of client work.{' '}
            <span className="text-white font-medium">
              Imagine what we can do with your problems on the table.
            </span>
          </p>
          <a href="https://degrand.ai/#contact"
            className="inline-flex items-center mt-6 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors gap-2"
          >
            Let&apos;s talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
