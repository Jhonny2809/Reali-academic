import React from 'react';
import { CreditCard, PenTool, Image as ImageIcon } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Como adquirir seu certificado?
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-1 bg-rose-100 z-0"></div>

          <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
            <div className="w-24 h-24 bg-white border-4 border-rose-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <CreditCard className="w-10 h-10 text-rose-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">1. Garanta a Oferta</h3>
            <p className="text-gray-600 px-4">Clique no botão verde e faça o pagamento seguro da taxa de emissão.</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
            <div className="w-24 h-24 bg-white border-4 border-rose-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <PenTool className="w-10 h-10 text-rose-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">2. Personalização</h3>
            <p className="text-gray-600 px-4">Após a confirmação, entraremos em contato para pegar seu nome correto.</p>
          </div>

          <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
            <div className="w-24 h-24 bg-white border-4 border-rose-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
              <ImageIcon className="w-10 h-10 text-rose-500" />
            </div>
            <h3 className="font-bold text-xl mb-2">3. Receba e Imprima</h3>
            <p className="text-gray-600 px-4">Receba o arquivo digital em alta qualidade, imprima e coloque na moldura.</p>
          </div>

        </div>
      </div>
    </section>
  );
};