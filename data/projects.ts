export interface Project {
  slug: string;
  tag: string;
  title: string;
  teaser: string;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'agentic-ai-assistant',
    tag: 'AI Infrastructure',
    title: 'Agentic AI Assistant',
    teaser: 'A fully autonomous AI assistant that operates across iMessage, Telegram, and email — managing tasks, drafting content, monitoring systems, and taking action without being asked twice.',
    image: '/project-images/agentic-ai-assistant.jpg',
  },
  {
    slug: 'ai-voice-agent',
    tag: 'AI Voice Agent',
    title: 'AI Voice Customer Service Agent',
    teaser: 'An AI voice agent that answers calls, books appointments, handles support questions, and routes complex inquiries — 24/7, without anyone picking up the phone.',
    image: '/project-images/ai-voice-agent.jpg',
  },
  {
    slug: 'ai-chatbot',
    tag: 'AI Chatbot',
    title: 'AI Chatbot',
    teaser: 'A custom AI chatbot that answers visitor questions, qualifies leads, and drives conversions — embedded directly on your website, 24/7.',
    image: '/project-images/ai-chatbot.jpg',
  },
];
