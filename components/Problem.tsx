export default function Problem() {
  const problems = [
    {
      stat: '62%',
      label: 'of calls to small businesses go unanswered',
      detail: 'That\'s a booked job going to your competitor — every single time.',
    },
    {
      stat: '80%',
      label: 'of callers won\'t leave a voicemail',
      detail: 'They hang up and call the next number on Google.',
    },
    {
      stat: '$0',
      label: 'earned from a missed after-hours call',
      detail: 'Emergency jobs are your highest-margin work. Missing them costs double.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Every missed call is a missed job.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Your team cannot answer the phone around the clock. But your customers expect it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-[#111111] border border-white/8 rounded-2xl p-8">
              <p className="text-5xl font-bold text-blue-400 mb-3">{p.stat}</p>
              <p className="text-white font-semibold mb-2 leading-snug">{p.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
