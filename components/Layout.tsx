import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react";
import { Header } from './Header';
import { Footer } from './Footer';


export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-narthex-cream relative">
      {/* Noise grain overlay — eliminates flat digital look */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          opacity: 0.045,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
      <div className="hidden md:block fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-stone-texture mix-blend-multiply"></div>
      <Header />
      <AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    className="flex-grow z-10 relative"
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
    {children}
  </motion.main>
</AnimatePresence>

      <Footer />
    </div>
  );
};
const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.45, ease: "easeOut" as const }
};
