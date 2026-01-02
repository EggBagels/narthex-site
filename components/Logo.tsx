import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/Images/Narthex Logo (Gold_Transparent).png"
        alt="Narthex Logo"
        className="h-10 w-auto object-contain"
      />
      <span className={`font-serif text-2xl font-semibold tracking-tight transition-colors duration-300 ${
        light ? 'text-narthex-cream' : 'text-narthex-black'
      }`}>
        NARTHEX
      </span>
    </div>
  );
};