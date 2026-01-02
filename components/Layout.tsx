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
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-stone-texture mix-blend-multiply"></div>
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
