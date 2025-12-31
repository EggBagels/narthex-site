import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  // Use white/black logo for dark backgrounds (hero), black/gold for light backgrounds
  const logoSrc = light ? '/Images/NARTHEX Logo White_Black.png' : '/Images/Narthex logo black_gold.png';

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Narthex Logo"
        className="h-10 w-auto object-contain"
      />
    </div>
  );
};