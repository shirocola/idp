import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  if (!params?.slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  const { slug } = params;

  // Map slug to file
  const fileMap: Record<string, string> = {
    'getting-started': 'README.md',
  };

  const fileName = fileMap[slug];
  if (!fileName) {
    return NextResponse.json({ error: 'Document not found' }, { status: 404 });
  }

  const repoUrl = `https://raw.githubusercontent.com/shirocola/devops-assignment/main/${fileName}`;

  try {
    const response = await fetch(repoUrl);

    if (!response.ok) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 });
    }

    const content = await response.text();
    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error fetching document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
