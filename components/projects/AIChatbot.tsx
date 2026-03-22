'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const capabilities = [
  {
    icon: '💬',
    title: 'Answers instantly',
    body: 'Responds to visitor questions in real time — no wait, no email form, no "we\'ll get back to you."',
  },
  {
    icon: '🧠',
    title: 'Trained on your business',
    body: 'Knows your services, pricing, FAQs, and policies. Gives accurate answers specific to your business — not generic responses.',
  },
  {
    icon: '📅',
    title: 'Drives conversions',
    body: 'Qualifies leads, answers objections, and guides visitors toward booking a call or submitting an inquiry.',
  },
  {
    icon: '🌐',
    title: 'Works on any website',
    body: 'Embeds on any site with a single line of code. No developer required. Live in minutes.',
  },
  {
    icon: '🔄',
    title: 'Always available',
    body: '24/7 coverage — answers questions at 2am the same way it does at 2pm. No off-hours, no missed opportunities.',
  },
  {
    icon: '📋',
    title: 'Captures leads',
    body: 'Collects contact info and conversation context so your team has everything they need before the first call.',
  },
  {
    icon: '🔗',
    title: 'Connects to your stack',
    body: 'Integrates with your CRM, calendar, or helpdesk so leads and conversations flow into your existing workflow.',
  },
  {
    icon: '✏️',
    title: 'Your voice, your brand',
    body: 'Speaks in your tone, uses your terminology, and represents your business — not a generic bot.',
  },
];

export default function AIChatbot() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/widget.js';
    script.async = true;
    script.onload = () => {
      // DOMContentLoaded already fired in React — manually init the widget
      const container = document.getElementById('dgw-embed');
      if (container && (window as { initWidget?: (el: HTMLElement) => void }).initWidget) {
        (window as { initWidget?: (el: HTMLElement) => void }).initWidget!(container);
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
      const embed = document.getElementById('dgw-embed');
      if (embed) embed.innerHTML = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back */}
      <div className="px-6 pt-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">← Back</a>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-6">
              AI Chatbot
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              AI Chatbot
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A custom AI chatbot that answers visitor questions, qualifies leads, and drives conversions — directly on your website, 24/7.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Built and trained specifically for your business. Knows your services, your tone, and what your customers actually ask. Embeds anywhere with a single line of code.
            </p>
            <a href="https://degrand.ai/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Get one for your business
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right — live chatbot embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div
                ref={embedRef}
                id="dgw-embed"
                data-dgw=""
                data-worker="https://demo.kti-degrand.workers.dev"
                data-name="DEGRAND.AI"
                data-prompt="You are a helpful assistant for degrand.ai. Be concise and friendly. Direct booking questions to degrand.ai/contact."
                data-greeting="Hey! How can I help you today?"
                style={{ width: '100%' }}
              />
              <div className="absolute inset-0 -z-10 blur-3xl opacity-15 bg-blue-500 rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What it does</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-[#111111] border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors"
              >
                <div className="text-2xl mb-4">{cap.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cap.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it's built */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Under the hood</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">How it&apos;s built</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Each chatbot is built on a frontier language model and trained on your specific business — your services, your FAQs, your tone, your escalation paths. It&apos;s not a template. It&apos;s custom.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              The bot runs on edge infrastructure — fast response times globally, no latency issues. Embeds on any website with a single script tag. No backend required on your end.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Conversations are logged so you can see exactly what your customers are asking. That data feeds back into improvements over time.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Response time', value: 'Near-instant — edge infrastructure' },
              { label: 'Setup', value: 'Single script tag — works on any website' },
              { label: 'Training', value: 'Custom to your business — services, FAQs, tone' },
              { label: 'Model', value: 'Frontier LLM — Anthropic, OpenAI, or Google' },
              { label: 'Integrations', value: 'CRM, calendar, helpdesk, Slack' },
              { label: 'Languages', value: 'Multilingual support' },
              { label: 'Availability', value: '24/7, no downtime' },
              { label: 'Analytics', value: 'Full conversation logs and insights' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-white/5 pb-4">
                <span className="text-gray-600 text-sm w-36 shrink-0">{item.label}</span>
                <span className="text-gray-300 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want one for your website?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We&apos;ll build and train a chatbot for your specific business — live on your site in days.</p>
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
    </div>
  );
}
