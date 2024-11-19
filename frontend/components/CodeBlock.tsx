'use client'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useState } from 'react';

interface CodeBlockProps {
  language: string;
  children: string;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative my-6">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-4 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600 z-10"
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={atomDark} // Ensures the black theme is used
        customStyle={{
          background: '#000', // Force black background
          borderRadius: '10px',
          padding: '1em',
          margin: '0 auto',
          maxWidth: '800px',
          overflowX: 'auto',
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

