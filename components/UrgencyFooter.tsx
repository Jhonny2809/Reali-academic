import React from 'react';
import { Button } from './Button';
import { Timer, ArrowRight } from 'lucide-react';

export const UrgencyFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-rose-900 to-black text-white py-20 border-t border-rose-800">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-8 animate-pulse shadow-lg">
            <Timer className="w-4 h-4" />
            ATENÇÃO: Oferta de Fim de Ano — Último Mês
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Se você já trabalha como cabeleireira, <br/>
          <span className="text-gold-400">você merece</span> validar sua profissão!
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Não deixe para depois. A credibilidade que você busca pode estar a um clique de distância. Suas clientes vão notar a diferença.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl max-w-md mx-auto mb-10">
            <p className="text-gray-300 text-sm mb-2">Garanta seu certificado completo por apenas:</p>
            <p className="text-5xl font-bold text-white mb-1">R$ 19,90</p>
            <p className="text-gray-400 text-xs line-through">Preço normal: R$ 119,47</p>
        </div>

        <div className="flex flex-col items-center gap-4">
            <Button text="Quero garantir meu certificado AGORA" fullWidth className="max-w-md text-lg" />
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                <span>🔒 Compra 100% segura</span>
                <span>•</span>
                <span>⚡ Entrega digital imediata</span>
            </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-gray-500 text-sm">
            &copy; 2025 Certificados Profissionais de Beleza. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};