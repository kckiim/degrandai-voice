'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find(s => s.slug === slug);
  const currentIndex = services.findIndex(s => s.slug === slug);
  const nextService = services[currentIndex + 1] || null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Service not found.</p>
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back */}
      <div className="px-6 pt-8">
        <div className="max-w-5xl mx-auto">
          <Link href="/#services" className="text-blue-400 hover:text-blue-300 text-sm">← Back</Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400/60 text-sm font-mono tracking-wider mb-4 block">{service.number}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">{service.title}</h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">{service.headline}</p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-5">
            {service.description.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-gray-400 leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#111111] border border-white/8 rounded-2xl p-8 self-start"
          >
            <h3 className="text-white font-semibold mb-5">What you get</h3>
            <ul className="space-y-3">
              {service.whatYouGet.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Good fit / Not good fit */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#111111] border border-white/8 rounded-2xl p-8"
          >
            <h3 className="text-white font-semibold mb-5">Good fit if...</h3>
            <ul className="space-y-3">
              {service.goodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-green-400 mt-0.5 shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#111111] border border-white/8 rounded-2xl p-8"
          >
            <h3 className="text-white font-semibold mb-5">Not a good fit if...</h3>
            <ul className="space-y-3">
              {service.notGoodFit.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-gray-600 mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Next step / phase */}
      {nextService ? (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="border border-white/8 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="text-gray-500 text-sm mb-2">Most clients continue to</p>
                <p className="text-white font-semibold text-lg">{nextService.number} — {nextService.title}</p>
                <p className="text-gray-400 text-sm mt-1 max-w-md">{service.nextStep}</p>
              </div>
              <Link
                href={`/services/${nextService.slug}`}
                className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2.5 rounded-full transition-colors text-sm"
              >
                {nextService.title}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-gray-400 mb-2 text-sm">{service.nextStep}</p>
            <h2 className="text-2xl font-bold text-white mb-6">Ready to get started?</h2>
            <a href="https://degrand.ai/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              Let&apos;s talk
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
