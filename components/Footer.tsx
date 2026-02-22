import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { MapPin, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-narthex-black text-narthex-gray py-16 border-t border-narthex-gold/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <Logo light className="scale-110 origin-left" />
            <p className="font-sans text-sm leading-relaxed max-w-xs">
              Where faith and professional excellence strengthen each other. A workspace for Catholic professionals.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-serif text-narthex-gold text-lg">Navigation</h4>
            <nav className="flex flex-col gap-3 font-sans text-sm">
              <Link to="/" className="inline-block hover:text-narthex-cream transition-all duration-200 hover:-translate-y-px">Home</Link>
              <Link to="/work" className="inline-block hover:text-narthex-cream transition-all duration-200 hover:-translate-y-px">Work at Narthex</Link>
              <Link to="/support" className="inline-block hover:text-narthex-cream transition-all duration-200 hover:-translate-y-px">Support Us</Link>
              <Link to="/about" className="inline-block hover:text-narthex-cream transition-all duration-200 hover:-translate-y-px">About</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-narthex-gold text-lg">Contact</h4>
            <div className="flex flex-col gap-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-narthex-gold mt-1 shrink-0" />
                <div>
                  <span>225 NW 59th St<br />Oklahoma City, Oklahoma</span>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-narthex-gold opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-narthex-gold" />
                    </span>
                    <span className="text-xs text-narthex-gold/70 font-sans uppercase tracking-widest">Now Open</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-narthex-gold" />
                <a href="mailto:narthexokc@gmail.com" className="hover:text-narthex-cream">narthexokc@gmail.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-narthex-gray/20 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs">
          <p>&copy; {new Date().getFullYear()} Narthex Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 hover:text-narthex-gold transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" className="p-2 hover:text-narthex-gold transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className="p-2 hover:text-narthex-gold transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};