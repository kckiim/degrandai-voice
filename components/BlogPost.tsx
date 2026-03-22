import Link from 'next/link';
import { posts } from '@/data/posts';

function renderContent(content: string) {
  const paragraphs = content.split('\n\n');
  return paragraphs.map((block, i) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-4">
          {block.replace('## ', '')}
        </h2>
      );
    }

    // Bold inline: **text**
    const parts = block.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((part, j) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      // Handle inline links [text](url)
      const linkParts = part.split(/(\[[^\]]+\]\([^)]+\))/g);
      return linkParts.map((lp, k) => {
        const match = lp.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          return (
            <a key={k} href={match[2]} className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              {match[1]}
            </a>
          );
        }
        return lp;
      });
    });

    return (
      <p key={i} className="text-gray-400 leading-relaxed mb-4">
        {rendered}
      </p>
    );
  });
}

export default function BlogPost({ slug }: { slug: string }) {
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Post not found.</p>
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-2xl mx-auto px-6 py-24">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm mb-12 inline-block">
          ← Back
        </Link>

        <span className="inline-block text-xs font-medium text-gray-500 bg-white/5 border border-white/8 rounded-full px-3 py-1 mb-6">
          {post.tag}
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-600 text-sm mb-12">{post.date}</p>

        <div className="border-t border-white/8 pt-12">
          {renderContent(post.content)}
        </div>
      </div>
    </div>
  );
}
