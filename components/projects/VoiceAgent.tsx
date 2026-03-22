'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Vapi from '@vapi-ai/web';

const VAPI_API_KEY = 'eceea5f5-7a3a-4789-b5c3-3a3d39777098';
const VAPI_ASSISTANT_ID = '04a67548-13c8-49e7-80a6-9bd9975f7953';

const capabilities = [
  {
    icon: '📞',
    title: 'Answers every call',
    body: 'Picks up instantly, 24/7. No hold times, no voicemail, no missed calls. Every caller gets a real response — immediately.',
  },
  {
    icon: '📅',
    title: 'Books appointments',
    body: 'Checks availability, schedules meetings, and sends confirmations — without a human touching the calendar.',
  },
  {
    icon: '🔀',
    title: 'Routes and transfers',
    body: 'Qualifies callers and routes them to the right person or department. Complex calls get escalated. Simple ones get handled.',
  },
  {
    icon: '💬',
    title: 'Handles support questions',
    body: 'Answers common questions, resolves straightforward issues, and knows when to hand off. Your team only gets the calls that actually need them.',
  },
  {
    icon: '🧠',
    title: 'Learns your business',
    body: 'Trained on your services, pricing, policies, and FAQs. Speaks in your brand voice — not a generic bot.',
  },
  {
    icon: '📋',
    title: 'Takes messages and notes',
    body: 'Captures caller details, reason for calling, and any relevant information — logged and sent to your team automatically.',
  },
  {
    icon: '🌐',
    title: 'Multilingual',
    body: 'Handles calls in multiple languages without switching agents or losing context.',
  },
  {
    icon: '📊',
    title: 'Call summaries & logs',
    body: 'Every call gets summarized and logged. Full visibility into what callers are asking — without listening to recordings.',
  },
];

export default function VoiceAgent() {
  const vapiRef = useRef<Vapi | null>(null);
  const [callActive, setCallActive] = useState(false);

  const handleCall = async () => {
    if (callActive) {
      vapiRef.current?.stop();
      setCallActive(false);
      return;
    }

    // Explicitly request mic permission first (required on mobile)
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      alert('Microphone access is required for the demo. Please allow mic access and try again.');
      return;
    }

    const vapi = new Vapi(VAPI_API_KEY);
    vapiRef.current = vapi;

    vapi.on('call-end', () => setCallActive(false));
    vapi.on('error', () => setCallActive(false));

    await vapi.start(VAPI_ASSISTANT_ID);
    setCallActive(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Back */}
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
              AI Voice Agent
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              AI Voice Customer Service Agent
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A fully autonomous AI voice agent that answers calls, books appointments, handles support questions, and routes complex inquiries — 24/7, without anyone picking up the phone.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Built for businesses that are losing leads to voicemail, paying staff to answer repetitive questions, or simply can&apos;t afford to miss a call. The agent sounds natural, knows your business, and handles most calls end-to-end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handleCall}
                className={`inline-flex items-center gap-3 font-semibold px-6 py-4 rounded-full transition-colors text-sm ${
                  callActive
                    ? 'bg-red-600 hover:bg-red-500 text-white'
                    : 'bg-blue-600 hover:bg-blue-500 text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full animate-pulse ${callActive ? 'bg-red-300' : 'bg-green-400'}`} />
                {callActive ? 'End Call' : 'Try it Live'}
              </button>
              <p className="text-gray-600 text-xs self-center">Free demo. Allow mic access when prompted. <br className="hidden sm:block"/>Not working? Try Chrome or Safari.</p>
            </div>
          </motion.div>

          {/* Right — phone visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="bg-[#0d0d0d] rounded-[40px] border-2 border-white/10 shadow-2xl overflow-hidden flex flex-col items-center justify-center"
                style={{ width: 260, height: 520 }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-10" />

                <div className="flex flex-col items-center gap-6 px-8 pt-10">
                  <div className="w-20 h-20 rounded-full bg-blue-500/20 border-2 border-blue-500/40 flex items-center justify-center">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.87 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>

                  <div className="text-center">
                    <p className="text-white font-semibold text-sm">DEGRAND.AI</p>
                    <p className={`text-xs mt-1 ${callActive ? 'text-red-400' : 'text-green-400'}`}>
                      {callActive ? '● Call in progress' : '● AI Agent Online'}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 h-10">
                    {[3, 6, 9, 12, 9, 6, 3, 6, 9, 6, 3].map((h, i) => (
                      <motion.div
                        key={i}
                        className={`w-1 rounded-full ${callActive ? 'bg-red-400' : 'bg-blue-400'}`}
                        animate={{ height: callActive ? [h, h * 3, h] : [h, h * 2.5, h] }}
                        transition={{ duration: callActive ? 0.4 : 0.8, repeat: Infinity, delay: i * 0.08, ease: 'easeInOut' }}
                        style={{ height: h }}
                      />
                    ))}
                  </div>

                  <p className="text-gray-500 text-xs text-center leading-relaxed">
                    {callActive
                      ? '"How can I help you today?"'
                      : '"Hi, thanks for calling DEGRAND.AI. How can I help you today?"'}
                  </p>

                  {/* Interactive call button */}
                  {callActive ? (
                    <button
                      onClick={handleCall}
                      className="w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center mt-2 transition-colors shadow-lg shadow-red-900/40"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.87 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" transform="rotate(135 12 12)"/>
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={handleCall}
                      className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center mt-2 transition-colors shadow-lg shadow-blue-900/40"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.87 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-blue-500 rounded-full scale-75" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What it handles</h2>
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
              The agent runs on a conversational AI voice platform with sub-second response latency — fast enough that callers don&apos;t notice they&apos;re not talking to a human. It handles interruptions, understands context across a full conversation, and knows when it&apos;s out of its depth.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Each deployment is trained on the client&apos;s specific business — services, pricing, FAQs, escalation paths, and tone of voice. The agent is tested against real call scenarios before it goes live.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Backend integrations connect the agent to your calendar, CRM, or ticketing system so it can take action — not just collect information.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Response latency', value: 'Sub-second — natural conversation flow' },
              { label: 'Availability', value: '24/7, no downtime' },
              { label: 'Voice quality', value: 'Human-grade, natural speech' },
              { label: 'Training', value: 'Custom to your business — services, FAQs, policies' },
              { label: 'Integrations', value: 'Calendar, CRM, ticketing systems' },
              { label: 'Escalation', value: 'Warm transfer to human when needed' },
              { label: 'Languages', value: 'Multilingual support' },
              { label: 'Reporting', value: 'Call logs, summaries, and analytics' },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want one for your business?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">We&apos;ll build and train a voice agent for your specific operation — ready to answer calls in days, not months.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Try the demo ↑
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
