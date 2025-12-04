import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Juliana Mendes",
    role: "Cabeleireira há 5 anos",
    image: "https://picsum.photos/id/65/100/100",
    text: "Eu já atendia, mas sem certificado muitas clientes ficavam inseguras na hora de fazer química. Agora mostro o quadro na parede do meu salão e faz toda diferença na negociação."
  },
  {
    name: "Carla Souza",
    role: "Atende em domicílio",
    image: "https://picsum.photos/id/64/100/100",
    text: "Depois que postei a foto com o certificado no Instagram, minhas clientes me levam muito mais a sério. Pararam de pedir desconto o tempo todo!"
  },
  {
    name: "Patrícia Lima",
    role: "Proprietária de Studio",
    image: "https://picsum.photos/id/342/100/100",
    text: "Simplesmente lindo. A qualidade da arte é impecável. Imprimi em papel fotográfico e coloquei numa moldura dourada. Ficou um luxo!"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Quem tem, recomenda
          </h2>
          <p className="text-gray-400">Junte-se a centenas de cabeleireiras que profissionalizaram sua imagem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/5 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold-400" />
                <div>
                  <h4 className="font-bold text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-gold-300">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};