import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const CAROUSEL_IMAGES = [
  "https://lh3.googleusercontent.com/d/1_Ww2UXa8SfC3WefhBAWFgx93lJvOD1xh=w1000",
  "https://lh3.googleusercontent.com/d/1fQgSvmWin6xE7bZcWdVFtSeR0SJ6-rmE=w1000",
  "https://lh3.googleusercontent.com/d/1rIkRP-TqitDPjnYuR7hosUd2c1HntrvE=w1000"
];

export const PainPoints: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Tempo reduzido para 4 segundos conforme solicitado
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                {CAROUSEL_IMAGES.map((src, index) => (
                  <img 
                    key={src}
                    src={src} 
                    alt={`Cabeleireira profissional ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {/* Gradiente sutil na base para integrar com o design */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Você já é cabeleireira <span className="text-rose-900">— agora só falta o documento.</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Muitas profissionais perdem clientes todos os dias não por falta de talento, mas por falta de <strong className="text-black">prova social</strong>. A cliente chega, olha para as paredes e não vê nada que garanta que você sabe o que está fazendo.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <p className="text-gray-700"><strong>A Insegurança da Cliente:</strong> "Será que ela tem curso? Será que vai estragar meu cabelo?"</p>
              </div>

              <div className="flex gap-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <p className="text-gray-700"><strong>Perda de Valor:</strong> Sem comprovação, fica difícil cobrar o preço justo pelo seu serviço.</p>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-100 shadow-sm">
                <h3 className="flex items-center gap-2 font-bold text-green-800 text-xl mb-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  A Solução Oficial 2026
                </h3>
                <p className="text-green-700">
                  O Certificado de Cabeleireira Autorizada preenche essa lacuna. Ele diz para sua cliente: <strong>"Pode confiar, eu sou uma profissional qualificada."</strong>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};