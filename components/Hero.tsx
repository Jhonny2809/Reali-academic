import React from 'react';
import { Scissors, Star, Clock } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image Static */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=1920&auto=format&fit=crop" 
          alt="Salão de Beleza Profissional" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Overlay escuro para melhorar leitura do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-[1px] w-12 bg-gold-400"></div>
          <span className="text-gold-400 uppercase tracking-widest text-xs font-bold">Edição Oficial 2026</span>
          <div className="h-[1px] w-12 bg-gold-400"></div>
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-bold leading-tight mb-6">
          O Certificado que <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">Comprova</span> Sua Profissão de Cabeleireira
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl font-light mb-8 max-w-2xl">
          Você já sabe fazer — agora precisa do documento que mostra profissionalismo, gera autoridade e conquista a confiança das clientes.
        </p>

        {/* Pricing Block */}
        <div className="flex flex-col items-center gap-3 mb-8 animate-fade-in-up">
            <span className="text-rose-400 text-xs md:text-sm font-bold tracking-widest uppercase bg-rose-950/80 px-4 py-1 rounded-full border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.3)]">
                🔥 Oferta de Fim de Ano • Último Mês
            </span>
            <div className="bg-white/10 backdrop-blur-md border border-gold-400/30 px-8 py-4 rounded-xl text-center shadow-2xl transform hover:scale-105 transition duration-300">
                <span className="block text-gray-400 text-sm md:text-base line-through decoration-red-500 decoration-2 mb-1">De R$ 119,47</span>
                <span className="block text-3xl md:text-5xl font-bold text-white leading-none mb-2">
                    Por <span className="text-gold-400">R$ 19,90</span>
                </span>
                <div className="flex items-center justify-center gap-1 text-green-400 text-xs font-medium bg-black/30 px-2 py-1 rounded-full">
                    <Clock size={12} /> Entrega em até 24h
                </div>
            </div>
        </div>

        <Button text="Quero meu Certificado Agora" className="animate-pulse shadow-[0_0_30px_rgba(250,204,21,0.5)]" />
        
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gold-100/80 text-sm">
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-gold-400" />
            <span>Profissionalismo</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gold-400" />
            <span>Reconhecimento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border border-gold-400 rounded-full flex items-center justify-center font-serif italic text-gold-400">A</div>
            <span>Autoridade</span>
          </div>
        </div>
      </div>
    </section>
  );
};