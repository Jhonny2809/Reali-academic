import React from 'react';
import { Award, TrendingUp, ShieldCheck, Heart, UserCheck, LayoutTemplate } from 'lucide-react';

const benefits = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-gold-400" />,
    title: "Aumenta a Confiança",
    desc: "A cliente senta na cadeira tranquila ao ver um certificado oficial na parede."
  },
  {
    icon: <Award className="w-8 h-8 text-gold-400" />,
    title: "Comprova Experiência",
    desc: "Valide anos de prática com um documento que formaliza seu conhecimento."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-gold-400" />,
    title: "Cobre Mais Caro",
    desc: "Autoridade permite cobrar pelo valor do seu resultado, não apenas pelo tempo."
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-gold-400" />,
    title: "Destaque no Salão",
    desc: "Ideal para enquadrar e decorar seu espaço, passando extremo profissionalismo."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-gold-400" />,
    title: "Diferenciação",
    desc: "Saia na frente de concorrentes amadoras que trabalham sem nenhuma identificação."
  },
  {
    icon: <Heart className="w-8 h-8 text-gold-400" />,
    title: "Autoestima Profissional",
    desc: "Sinta o orgulho de olhar para a parede e ver seu nome reconhecido como cabeleireira."
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-white">
            Por que você precisa deste Certificado?
          </h2>
          <p className="text-gray-400 text-lg">
            Não é apenas um papel. É a chave para elevar o nível do seu atendimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition duration-300 group">
              <div className="mb-4 bg-black/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300 border border-gold-600/30">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-gold-300 mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};