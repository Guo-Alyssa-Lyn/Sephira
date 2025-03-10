'use client';

import { ReactNode } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Global background overlay for consistent text visibility */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative">
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
} 