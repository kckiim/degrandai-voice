export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Answers every call',
      description: 'Your AI agent picks up in seconds — day or night, weekend or holiday. No voicemail, no hold music, no missed jobs.',
    },
    {
      number: '02',
      title: 'Handles the conversation',
      description: 'Books appointments, answers questions about your services, collects job details, and qualifies the lead — all before a human gets involved.',
    },
    {
      number: '03',
      title: 'Hands off when it matters',
      description: 'Emergency? Complex situation? It transfers to the right person on your team immediately, with full context already captured.',
    },
    {
      number: '04',
      title: 'Works while you sleep',
      description: 'After-hours calls are answered and scheduled for your morning. You wake up to a booked calendar, not a list of missed calls.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Set it up once. It works forever.
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            No complicated software. No training your staff. We build it, we manage it, it answers your phones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-[#111111] border border-white/8 rounded-2xl p-8 flex gap-6">
              <span className="text-blue-400/40 font-bold text-4xl leading-none flex-shrink-0">{step.number}</span>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
