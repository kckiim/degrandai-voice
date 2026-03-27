export default function Demo() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Hear It</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Listen to a live demo call.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-12">
          This is what your customers hear when they call after hours. Real conversation, no scripts, no hold music.
        </p>

        {/* Demo embed placeholder — swap with actual Vapi widget or audio player */}
        <div className="bg-[#111111] border border-white/8 rounded-2xl p-12 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
              <polygon points="5 3 19 12 5 21 5 3" fill="#60a5fa" />
            </svg>
          </div>
          <p className="text-white font-semibold">Demo call coming soon</p>
          <p className="text-gray-500 text-sm">Book a call and we will walk you through a live version built for your business.</p>
        </div>
      </div>
    </section>
  );
}
