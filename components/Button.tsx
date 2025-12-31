import React from 'react';
import { ButtonVariant } from '../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = ButtonVariant.PRIMARY, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3.5 font-sans font-medium text-base transition-all duration-300 ease-out flex items-center justify-center";
  
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-narthex-green text-narthex-cream border-2 border-transparent hover:border-narthex-gold hover:-translate-y-1 shadow-lg hover:shadow-xl",
    [ButtonVariant.SECONDARY]: "bg-narthex-cream text-narthex-black border-2 border-narthex-green hover:bg-narthex-green hover:text-narthex-cream hover:-translate-y-1",
    [ButtonVariant.OUTLINE]: "bg-transparent text-narthex-cream border-2 border-narthex-gold hover:bg-narthex-gold hover:text-narthex-black",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};