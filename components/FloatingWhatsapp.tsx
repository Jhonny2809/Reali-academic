import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsapp: React.FC = () => {
  // Número atualizado com DDI (55) e DDD (73)
  const whatsappLink = "https://wa.me/5573988023961?text=Olá,%20tenho%20interesse%20no%20Certificado%20de%20Cabeleireira%20Autorizada%202026";

  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 flex items-center justify-center animate-bounce duration-[2000ms]"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </a>
  );
};