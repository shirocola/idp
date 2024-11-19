// app/docs/[slug]/page.tsx
import React from 'react'; // Explicitly import React
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'; // Import MDXRemote for RSC

interface Props {
  params: { slug: string };
}

export default async function DocPage({ params }: Props) {
  const { slug } = params;

  // Resolve the path to the MDX file
  const filePath = path.join(process.cwd(), 'docs', `${slug}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return <div className="prose mx-auto p-4">Document not found</div>;
  }

  // Read the MDX file content
  const source = fs.readFileSync(filePath, 'utf8');

  // Use the MDXRemote asynchronously
  const content = await MDXRemote({ source }); // Resolve the MDXRemote promise

  return (
    <div className="prose mx-auto p-4">
      {content}
    </div>
  );
}
