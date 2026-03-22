'use client';

import Link from 'next/link';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-gray-500 text-sm max-w-xl leading-relaxed">
            Three services. Most clients go through all three — in order. Each one builds on the last.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group bg-[#111111] border border-white/8 rounded-2xl p-8 hover:border-blue-500/30 hover:bg-[#111111]/80 transition-all duration-300 flex flex-col"
            >
              <span className="text-blue-400/50 text-sm font-mono font-medium tracking-wider mb-6 block">
                {s.number}
              </span>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm flex-1">
                {s.teaser}
              </p>
              <div className="flex items-center gap-1 mt-6 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
