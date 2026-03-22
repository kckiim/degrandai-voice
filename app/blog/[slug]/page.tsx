import BlogPost from '@/components/BlogPost';
import { posts } from '@/data/posts';

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;
}
