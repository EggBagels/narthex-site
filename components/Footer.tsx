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
              Where faith and professional excellence strengthen each other. A workspace for Catholic professionals in Oklahoma City.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-serif text-narthex-gold text-lg">Navigation</h4>
            <nav className="flex flex-col gap-3 font-sans text-sm">
              <Link to="/" className="hover:text-narthex-cream transition-colors">Home</Link>
              <Link to="/work" className="hover:text-narthex-cream transition-colors">Work at Narthex</Link>
              <Link to="/support" className="hover:text-narthex-cream transition-colors">Support Us</Link>
              <Link to="/about" className="hover:text-narthex-cream transition-colors">About</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-narthex-gold text-lg">Contact</h4>
            <div className="flex flex-col gap-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-narthex-gold mt-1" />
                <span>225 NW 59th St<br />Oklahoma City, Oklahoma</span>
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
          <p>&copy; {new Date().getFullYear()} Narthex OKC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-narthex-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-narthex-gold transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-narthex-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};