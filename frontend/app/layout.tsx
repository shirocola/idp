import React from 'react';
import DocsSidebar from '@/components/DocsSidebar';
import './globals.css';

export const metadata = {
  title: 'IDP',
  description: 'Internal Platform Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <div className="flex">
          <DocsSidebar />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
