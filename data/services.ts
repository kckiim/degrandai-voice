export interface Service {
  slug: string;
  number: string;
  title: string;
  teaser: string;
  headline: string;
  description: string[];
  whatYouGet: string[];
  goodFit: string[];
  notGoodFit: string[];
  nextStep: string;
}

export const services: Service[] = [
  {
    slug: 'operations-consulting',
    number: '01',
    title: 'Operations Consulting',
    teaser: 'Before touching any technology, we look at how your operations actually run — where work piles up, where handoffs break down, where time gets wasted. Most clients start here.',
    headline: 'Fix the operation first. Then add technology.',
    description: [
      'Most businesses add AI tools on top of broken processes and wonder why nothing improves. The problem isn\'t the tool — it\'s that the underlying workflow was never designed to work efficiently in the first place.',
      'We map how work actually moves through your business — not how it\'s supposed to work, but how it actually works. That means talking to your team, watching the process, and finding the real bottlenecks: where things pile up, where decisions slow down, where handoffs break.',
      'From there we build a clear picture of what to fix and in what order. Process changes come first. AI and automation come in where they make the biggest difference — not where they sound impressive.',
    ],
    whatYouGet: [
      'A clear map of your current operation and where it breaks down',
      'Prioritized list of fixes — process changes, workflow redesigns, and automation opportunities',
      'Honest assessment of where AI will help and where it won\'t',
      'A sequenced plan so nothing gets built on a broken foundation',
    ],
    goodFit: [
      'You\'re growing but your operations aren\'t keeping up',
      'Your team is constantly putting out fires instead of doing the actual work',
      'You\'ve tried tools and they haven\'t stuck',
      'You want to understand the problem before spending money on a solution',
    ],
    notGoodFit: [
      'You already know exactly what you need built and just need a developer',
      'You\'re looking for a quick fix without process change',
    ],
    nextStep: 'Most clients move from here into AI Implementation once we\'ve identified where technology will actually help.',
  },
  {
    slug: 'ai-implementation',
    number: '02',
    title: 'AI Implementation',
    teaser: 'AI tools are only useful if they\'re integrated into how your business actually works. We connect the right tools to the right processes and make sure your team uses them — not just has access to them.',
    headline: 'The right AI tools, in the right places, actually used.',
    description: [
      'Buying an AI tool is easy. Getting it to work inside your actual business — connected to your data, integrated with your team\'s workflow, producing output people trust — is the hard part.',
      'We identify which AI tools fit the specific gaps in your operation, handle the integration work, and set up the system so it works the way your team actually operates. That means custom configuration, not generic setups.',
      'Adoption matters as much as implementation. We make sure the people using these tools understand them, trust the output, and know what to do when something looks wrong.',
    ],
    whatYouGet: [
      'AI tools selected and configured for your specific workflow — not a generic install',
      'Integration with your existing systems and data sources',
      'Team training and documentation so it actually gets used',
      'A handoff process so you\'re not dependent on me to keep it running',
    ],
    goodFit: [
      'You\'ve identified specific problems and want the right tools to solve them',
      'You\'ve tried AI tools before but they never got adopted',
      'You need AI connected to your existing systems, not running in isolation',
      'You want implementation done right the first time',
    ],
    notGoodFit: [
      'You haven\'t mapped your process yet — start with Operations Consulting',
      'You\'re looking for off-the-shelf software with no customization',
    ],
    nextStep: 'Once the right tools are in place, the next step is Automation — making the system run without manual intervention.',
  },
  {
    slug: 'ai-automation',
    number: '03',
    title: 'AI Automation',
    teaser: 'We build automations that take the repetitive, manual work out of your operations — and make it happen without anyone touching it. If your team is doing the same thing over and over, that\'s a system problem.',
    headline: 'If your team is doing it repeatedly, it shouldn\'t be manual.',
    description: [
      'Automation is where the ROI compounds. Once a process is working correctly, automating it means it runs faster, more consistently, and without anyone\'s time — indefinitely.',
      'We build automations that handle the repetitive, predictable parts of your operation: data processing, report generation, notifications, handoffs, follow-ups, document handling. The kind of work that eats hours without requiring much thought.',
      'Everything is built to be maintainable. We document what was built, how it works, and what to do if something breaks. You\'re not left with a black box.',
    ],
    whatYouGet: [
      'Automated workflows for your highest-volume, most repetitive tasks',
      'AI-powered processing where judgment is needed — routing, categorization, summarization',
      'Monitoring and alerting so you know when something needs attention',
      'Full documentation so your team can maintain and extend it',
    ],
    goodFit: [
      'Your team spends significant time on repetitive, predictable tasks',
      'You\'re processing high volume — documents, emails, data entry, reports',
      'You want things to run without manual intervention',
      'You\'ve already got the right tools in place and want to connect them',
    ],
    notGoodFit: [
      'Your processes aren\'t stable yet — automation locks in whatever you\'ve got',
      'You need something built and never want to touch it again — all automation requires some maintenance',
    ],
    nextStep: 'Most clients who go through all three phases end up with an operation that\'s significantly leaner and more scalable than when they started.',
  },
];
