import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-narthex-cream relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-stone-texture mix-blend-multiply"></div>
      <Header />
      <main className="flex-grow z-10 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};