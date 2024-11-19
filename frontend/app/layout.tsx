import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Developer Portal',
  description: 'Internal Developer Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
