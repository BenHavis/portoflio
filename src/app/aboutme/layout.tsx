import React from 'react';

interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <section className="min-h-screen bg-gray-50">
      <main className="min-h-screen">
        {children}
      </main>
    </section>
  );
}