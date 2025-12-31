import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Work at Narthex', path: '/work' },
  { label: 'Support Us', path: '/support' },
  { label: 'About', path: '/about' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Trigger solid background only after scrolling significantly past the top
      // This ensures transparent header at the very top and during initial scroll
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 120);
    };

    // Set initial state immediately on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-narthex-cream/95 backdrop-blur-sm border-b border-narthex-gray/10 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="z-50">
          <Logo light={!isScrolled} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans text-sm font-medium tracking-wide uppercase transition-colors duration-300 border-b-2 border-transparent hover:border-narthex-gold ${
                !isScrolled
                  ? 'text-narthex-cream hover:text-narthex-gold'
                  : 'text-narthex-black hover:text-narthex-gold'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-narthex-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} color={!isScrolled ? '#F5F1E8' : '#0A0A0A'} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-narthex-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-serif text-3xl text-narthex-cream hover:text-narthex-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};