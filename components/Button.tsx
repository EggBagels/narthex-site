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
  const baseStyles = "relative overflow-hidden group px-8 py-3.5 font-sans font-medium text-base transition-all duration-300 ease-out flex items-center justify-center hover:scale-[1.03] active:scale-[0.98]";

  const variants = {
    [ButtonVariant.PRIMARY]: "bg-narthex-green text-narthex-cream border-2 border-transparent hover:border-narthex-gold hover:-translate-y-1 shadow-lg hover:shadow-xl",
    [ButtonVariant.SECONDARY]: "bg-narthex-cream text-narthex-black border-2 border-narthex-green hover:bg-narthex-green hover:text-narthex-cream hover:-translate-y-1",
    [ButtonVariant.OUTLINE]: "bg-transparent text-narthex-cream border-2 border-narthex-gold hover:bg-narthex-gold hover:text-narthex-black",
  };

  const slideColors = {
    [ButtonVariant.PRIMARY]: 'rgba(201,169,97,0.15)',
    [ButtonVariant.SECONDARY]: 'rgba(27,59,43,0.08)',
    [ButtonVariant.OUTLINE]: 'rgba(201,169,97,0.2)',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
        style={{ backgroundColor: slideColors[variant] }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};