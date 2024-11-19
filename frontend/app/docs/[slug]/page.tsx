import { notFound } from 'next/navigation';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface Props {
  params: { slug: string };
}

export default async function DocPage({ params }: Props) {
  if (!params?.slug) {
    notFound(); // Return 404 for invalid slugs
  }

  const { slug } = params;

  // Fetch Markdown content
  const response = await fetch(`http://localhost:3000/api/docs/${slug}`, {
    cache: 'no-cache',
  });

  if (!response.ok) {
    notFound(); // Return 404 if content is not found
  }

  const { content } = await response.json();

  return (
    <div className="prose mx-auto py-6">
      <MarkdownRenderer content={content} />
    </div>
  );
}
