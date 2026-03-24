'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  { role: 'user', text: 'Send me a summary of this week\'s content performance.' },
  { role: 'ai', text: 'On it. Pulling metrics now...' },
  { role: 'ai', text: 'LinkedIn: top post up 18% week-over-week. X: best thread hit 890 impressions.' },
  { role: 'user', text: 'Draft a follow-up post based on the top performer.' },
  { role: 'ai', text: 'Draft ready. Sending to your email now.' },
  { role: 'user', text: 'Remind me tomorrow at 9am to review it.' },
  { role: 'ai', text: 'Done. Reminder set for tomorrow 9am.' },
];

function PhoneMockup() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const indexRef = useRef(0);
  const mountedRef = useRef(true);

  const clearAll = () => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  };

  const schedule = (fn: () => void, ms: number) => {
    const t = setTimeout(() => {
      if (!mountedRef.current) return;
      fn();
    }, ms);
    timeouts.current.push(t);
  };

  useEffect(() => {
    mountedRef.current = true;

    const next = () => {
      const i = indexRef.current;

      if (i >= messages.length) {
        schedule(() => {
          setVisibleMessages([]);
          setTyping(false);
          indexRef.current = 0;
          schedule(next, 600);
        }, 3000);
        return;
      }

      const msg = messages[i];
      if (msg.role === 'ai') {
        setTyping(true);
        schedule(() => {
          setTyping(false);
          setVisibleMessages(prev => [...prev, i]);
          indexRef.current = i + 1;
          schedule(next, 900);
        }, 1200);
      } else {
        setVisibleMessages(prev => [...prev, i]);
        indexRef.current = i + 1;
        schedule(next, 700);
      }
    };

    schedule(next, 600);

    return () => {
      mountedRef.current = false;
      clearAll();
    };
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: 260 }}>
      {/* Phone frame */}
      <div className="relative bg-[#0d0d0d] rounded-[40px] border-2 border-white/10 shadow-2xl overflow-hidden"
        style={{ height: 520, width: 260 }}>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />

        {/* Status bar */}
        <div className="flex justify-between items-center px-6 pt-8 pb-2">
          <span className="text-white text-[10px] font-medium">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 border border-white/50 rounded-sm">
              <div className="w-2 h-full bg-white/50 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-2 px-4 pb-3 border-b border-white/5">
          <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <span className="text-blue-400 text-[10px] font-bold">AI</span>
          </div>
          <div>
            <p className="text-white text-[11px] font-semibold">AI Assistant</p>
            <p className="text-green-400 text-[9px]">● Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-1.5 px-3 pt-2 overflow-hidden" style={{ height: 310 }}>
          <AnimatePresence>
            {visibleMessages.map((i) => {
              const msg = messages[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-3 py-1.5 text-[10px] leading-snug max-w-[80%] ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-sm'
                        : 'bg-white/8 text-gray-200 rounded-tl-sm border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              );
            })}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white/8 border border-white/5 rounded-2xl rounded-tl-sm px-3 py-2">
                  <div className="flex gap-1 items-center h-3">
                    {[0, 1, 2].map(i => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input bar */}
        <div className="absolute bottom-4 left-3 right-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center justify-between">
          <span className="text-gray-600 text-[10px]">Message...</span>
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-blue-500 rounded-full scale-75" />
    </div>
  );
}

const capabilities = [
  {
    icon: '💬',
    title: 'Multi-channel messaging',
    body: 'Operates natively across iMessage, Telegram, and email. Receives voice notes, transcribes them, and responds in context.',
  },
  {
    icon: '🔁',
    title: 'Autonomous task execution',
    body: 'Runs scheduled tasks without prompting — morning digests, weekly content briefs, credit monitoring, nightly knowledge updates.',
  },
  {
    icon: '🌐',
    title: 'Live research & web access',
    body: 'Searches the web in real time, fetches and summarizes URLs, pulls current data to inform decisions and drafts.',
  },
  {
    icon: '✍️',
    title: 'Content drafting',
    body: 'Writes LinkedIn posts, X threads, blog articles, and email drafts — in a specific voice, on a schedule, ready for review.',
  },
  {
    icon: '🔊',
    title: 'Voice note generation',
    body: 'Generates and sends audio responses via text-to-speech — a fully functional voice presence across messaging channels.',
  },
  {
    icon: '⚙️',
    title: 'System & infra monitoring',
    body: 'Monitors API credit balances, checks system health, restarts crashed processes, and alerts when something needs attention.',
  },
  {
    icon: '🧠',
    title: 'Persistent memory',
    body: 'Maintains structured knowledge across sessions — preferences, project context, lessons learned, and operational history.',
  },
  {
    icon: '🤖',
    title: 'Sub-agent orchestration',
    body: 'Spawns and manages specialized sub-agents for parallel workloads — research, writing, and code — then synthesizes results.',
  },
];

export default function AgenticAI() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav back */}
      <div className="px-6 pt-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">← Back</Link>
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
              AI Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Agentic AI Assistant
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A fully autonomous AI assistant built to operate across messaging channels, manage tasks, monitor systems, and take action — without being asked twice.
            </p>
            <p className="text-gray-500 leading-relaxed">
              This isn&apos;t a chatbot. It&apos;s a persistent AI operator with memory, scheduling, web access, voice capabilities, and the ability to spawn sub-agents for parallel workloads. It runs continuously, learns from corrections, and gets better over time.
            </p>
          </motion.div>

          {/* Right — phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What it actually does</h2>
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
              The assistant runs on a self-hosted gateway — always on, always connected. It uses a frontier language model at its core with a structured tool layer: shell execution, web search, file I/O, API calls, and inter-session messaging.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Memory is persistent and structured — not a conversation window, but a living knowledge base that updates after every session. Preferences, project context, corrections, and lessons learned are all stored and retrieved automatically.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Scheduling is handled by a cron layer that fires system events and agent turns on a defined cadence — no babysitting required. The assistant knows what it needs to do and when.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Runtime', value: 'Self-hosted, always on' },
              { label: 'Channels', value: 'iMessage, Telegram, Slack, WhatsApp, Email' },
              { label: 'Core model', value: 'Anthropic, OpenAI, Google, Meta, Mistral — model-agnostic' },
              { label: 'Scheduling', value: 'Cron-based, event-driven' },
              { label: 'Memory', value: 'Persistent structured knowledge base' },
              { label: 'Automation', value: 'Custom Python scripts + workflow orchestration' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-white/5 pb-4">
                <span className="text-gray-600 text-sm w-32 shrink-0">{item.label}</span>
                <span className="text-gray-300 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want something like this for your business?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">This is the kind of infrastructure we build for clients — custom AI systems that actually work inside your operation.</p>
          <a href="https://degrand.ai/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
          >
            Let&apos;s talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
