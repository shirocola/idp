import { notFound } from 'next/navigation';

interface Props {
  params: { slug?: string };
}

export default async function DocPage({ params }: Props) {
  // Ensure params is properly resolved
  const { slug } = params;

  // Handle undefined slug
  if (!slug) {
    notFound();
  }

  // Fetch the content (can be local or external)
  const content = await fetchDocFromExternalRepo(slug);

  if (!content) {
    notFound();
  }

  return (
    <div className="prose mx-auto p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

async function fetchDocFromExternalRepo(slug: string): Promise<string | null> {
  const repoUrl = `https://raw.githubusercontent.com/your-org/your-docs-repo/main/docs/${slug}.mdx`;
  
  try {
    const response = await fetch(repoUrl);
    if (!response.ok) {
      return null; // File not found
    }
    return await response.text();
  } catch (error) {
    console.error('Error fetching document:', error);
    return null;
  }
}
