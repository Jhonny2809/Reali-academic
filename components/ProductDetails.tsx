import React from 'react';
import { Check, Download, Printer, Tag, Clock } from 'lucide-react';
import { Button } from './Button';

export const ProductDetails: React.FC = () => {
  return (
    <section className="py-24 bg-rose-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Mock Certificate Visual */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative bg-white border-[10px] border-double border-gray-200 p-8 shadow-2xl rotate-1 hover:rotate-0 transition duration-500 rounded-lg aspect-[1.4/1] flex flex-col items-center justify-center text-center">
                {/* Decorative borders simulating certificate */}
                <div className="absolute inset-4 border border-gold-400/50"></div>
                <div className="absolute inset-5 border border-gold-400/30"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gold-400 rounded-full flex items-center justify-center text-white font-serif font-bold text-2xl shadow-md">
                        2026
                    </div>
                </div>

                <div className="mt-12 font-serif text-4xl md:text-5xl text-gray-900 font-bold mb-2 tracking-wide uppercase">
                    Certificado
                </div>
                <div className="text-gold-600 font-medium tracking-[0.2em] text-sm md:text-base uppercase mb-8">
                    Cabeleireira Autorizada
                </div>

                <div className="font-handwriting text-2xl md:text-4xl text-gray-800 mb-6 font-serif italic">
                    Seu Nome Aqui
                </div>

                <div className="text-gray-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed">
                    Certificamos que a profissional acima concluiu com êxito os requisitos técnicos de excelência em beleza capilar.
                </div>

                <div className="mt-8 flex justify-between w-full px-12 opacity-60">
                    <div className="h-px w-24 bg-black mt-8 relative"><span className="absolute -bottom-5 left-0 text-[10px] w-full text-center">Diretoria</span></div>
                    <div className="h-px w-24 bg-black mt-8 relative"><span className="absolute -bottom-5 left-0 text-[10px] w-full text-center">Data</span></div>
                </div>
                
                 {/* Gold Seal Effect */}
                <div className="absolute bottom-6 right-8 w-20 h-20 text-gold-500 opacity-20">
                    <svg viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0L61 35H98L68 57L79 91L50 70L21 91L32 57L2 35H39L50 0Z" />
                    </svg>
                </div>
            </div>
            {/* Background blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gold-300/20 blur-3xl rounded-full"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
              O Certificado de Cabeleireira <span className="text-gold-600">Autorizada 2026</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Um documento desenvolvido com design de alta qualidade, pronto para ser personalizado com seu nome. Ele foi criado para transmitir a elegância e a seriedade que a profissão de cabeleireira exige.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="bg-gold-100 p-1 rounded-full text-gold-600 mt-1"><Check size={16} /></div>
                <span className="text-gray-800 font-medium">Design Premium Elegante (Preto e Dourado)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-gold-100 p-1 rounded-full text-gold-600 mt-1"><Check size={16} /></div>
                <span className="text-gray-800 font-medium">Assinatura de autenticação e data atualizada</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-gold-100 p-1 rounded-full text-gold-600 mt-1"><Download size={16} /></div>
                <span className="text-gray-800 font-medium">Formato Digital (PDF Alta Resolução)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-gold-100 p-1 rounded-full text-gold-600 mt-1"><Printer size={16} /></div>
                <span className="text-gray-800 font-medium">Pronto para imprimir em qualquer gráfica e emoldurar</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-gold-100 p-1 rounded-full text-gold-600 mt-1"><Check size={16} /></div>
                <span className="text-gray-800 font-medium">Serve para portfólio, Instagram e parede do salão</span>
              </li>
            </ul>

            {/* Premium Price Box Redesign - Mobile Optimized and Bug Fixed */}
            <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl overflow-hidden shadow-2xl border border-gold-500/30 flex flex-col mb-8 relative">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/20 blur-[50px] rounded-full pointer-events-none"></div>

                {/* Header Section with Badge */}
                <div className="w-full p-4 pb-0 flex justify-center md:justify-end">
                     <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1 z-10">
                        <Tag size={12} /> Oferta de Fim de Ano
                    </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 pt-2 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
                    <div className="text-center md:text-left">
                        <p className="text-gray-400 text-sm mb-1 line-through decoration-red-500 decoration-2">De R$ 119,47</p>
                        <div className="flex items-baseline justify-center md:justify-start gap-1">
                            <span className="text-xl md:text-2xl font-light text-gray-300">Por apenas</span>
                        </div>
                    </div>
                    
                    <div className="flex items-baseline justify-center">
                        <span className="text-lg text-gold-400 font-bold mr-1">R$</span>
                        <span className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-500 drop-shadow-sm">19,90</span>
                    </div>
                </div>

                {/* Delivery Info - New Section */}
                <div className="bg-white/5 p-3 flex items-center justify-center gap-2 text-green-400 text-sm font-medium border-t border-white/10">
                    <Clock size={16} />
                    Entrega do certificado digital em até 24 horas
                </div>
                
                {/* Footer Note */}
                <div className="bg-black/40 p-2">
                   <p className="text-center text-gold-100/60 text-[10px] uppercase tracking-wider">
                      ⚡ Promoção válida apenas para o mês de Dezembro
                   </p>
                </div>
            </div>

            <Button text="Quero Personalizar o Meu Agora" />
          </div>

        </div>
      </div>
    </section>
  );
};