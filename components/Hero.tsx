'use client';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block text-xs font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8 tracking-widest uppercase">
          AI Voice Agent for Trades
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Your phone rings at 9pm.
          <br />
          <span className="text-blue-400">Don&apos;t let it go to voicemail.</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          An AI voice agent that answers every call 24/7, books appointments, handles customer questions, and hands off to your team when it matters — built for HVAC, plumbing, and electrical businesses.
        </p>

        <a
          href="https://calendly.com/degrand/15-minute-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
        >
          Book a Free 15-Min Call
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        <p className="text-gray-600 text-sm mt-4">No pitch. Just a conversation about whether this fits your business.</p>
      </div>
    </section>
  );
}
