'use client';
import Link from 'next/link';
const paragraphs = [
  "K.C. deGregory founded DEGRAND.AI after spending over a decade in logistics and operations — managing freight, fixing workflows, and figuring out why things weren't moving as fast as they should. Operations teaches you how to find the real problem, not the surface one. That's still how we think.",
  "A few years ago, we started building with AI — not just using it, actually building with it. Automations, integrations, full applications. The more we built, the clearer it became that most businesses weren't slow because of their people. They were slow because their processes hadn't caught up to what's possible now.",
  "DEGRAND.AI is where that comes together. We work with businesses that want to run leaner — fewer manual steps, better information flow, less time spent on work that a system could handle. We start with the process before we touch any technology. AI doesn't fix a broken workflow. It speeds one up.",
  "Our work ranges from scoping out where AI actually fits in a business, to building the automations and integrations that get it there. We work with founders and operations teams who want real results and aren't interested in wasting time on tools that sound good but don't stick.",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <div>
            <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight sticky top-28">
              About DEGRAND.AI
            </h2>
          </div>

          {/* Right — body */}
          <div className="space-y-6">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-gray-400 leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4">
              <a href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200 text-sm gap-2"
              >
                Work with us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
