import React from 'react';
import { Lock } from 'lucide-react';

interface ButtonProps {
  text: string;
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, className = "", fullWidth = false }) => {
  // Link direto para o checkout da Kiwify
  const checkoutLink = "https://pay.kiwify.com.br/TtHAEam";

  return (
    <a 
      href={checkoutLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2 
        bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700
        text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition hover:scale-105
        uppercase tracking-wide text-sm md:text-base border-2 border-green-400/30
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <Lock className="w-5 h-5 fill-current opacity-80" />
      {text}
    </a>
  );
};