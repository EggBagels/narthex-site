import React from 'react';
import { Church } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center gap-2 font-serif tracking-widest ${className}`}>
      <div className={`relative p-1 rounded-full border-2 ${light ? 'border-narthex-gold text-narthex-gold' : 'border-narthex-gold text-narthex-gold'}`}>
        <Church size={24} strokeWidth={1.5} />
      </div>
      <span className={`text-xl font-bold ${light ? 'text-narthex-cream' : 'text-narthex-black'}`}>
        NARTHEX
      </span>
    </div>
  );
};