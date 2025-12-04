import React from 'react';
import { Home, Sparkles, History, UserPlus } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Para quem este certificado é ideal?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition">
              <History className="text-rose-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">A Experiente</h3>
            <p className="text-sm text-gray-600">Para você que atua há anos, sabe tudo da prática, mas nunca parou para pegar um certificado formal.</p>
          </div>

          <div className="p-6 border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition">
              <Home className="text-rose-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">Home Care</h3>
            <p className="text-sm text-gray-600">Para você que atende em casa e quer transformar seu espaço em um ambiente profissional.</p>
          </div>

          <div className="p-6 border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition">
              <Sparkles className="text-rose-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">A Esteticista</h3>
            <p className="text-sm text-gray-600">Profissionais que querem deixar o salão mais bonito e decorar as paredes com autoridade.</p>
          </div>

          <div className="p-6 border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl transition group">
            <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition">
              <UserPlus className="text-rose-600" />
            </div>
            <h3 className="font-bold text-lg mb-2">A Iniciante</h3>
            <p className="text-sm text-gray-600">Começou agora? Gere confiança imediata nas primeiras clientes mostrando ser certificada.</p>
          </div>

        </div>
      </div>
    </section>
  );
};