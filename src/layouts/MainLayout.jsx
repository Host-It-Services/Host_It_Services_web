import React from 'react';

export default function MainLayout({ children }) {
  return (
    <>
      <main className="container mx-auto mt-8">
        {children}
      </main>
    </>
  );
}
