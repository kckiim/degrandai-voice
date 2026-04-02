export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-b from-blue-950/30 to-transparent border border-blue-500/10 rounded-3xl p-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-6">Ready to stop missing calls?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s build your voice agent.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
            15 minutes. We&apos;ll talk about your call volume, what your customers typically ask, and whether an AI agent makes sense for your business right now.
          </p>
          <a
            href="https://calendly.com/degrand"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg"
          >
            Book a Free 15-Min Call
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-gray-600 text-sm mt-4">No commitment. No pitch deck. Just a conversation.</p>
        </div>
      </div>
    </section>
  );
}
