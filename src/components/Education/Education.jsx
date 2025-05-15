import React, { useState } from 'react';
import { tarjetas } from '../../constants/educacion';

const Education = () => {
  const [activeTab, setActiveTab] = useState(tarjetas[0].id);

  return (
    <section id="educacion" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Educación y Formación</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="mb-10">
          <div className="flex flex-wrap justify-center border-b border-gray-700">
            {tarjetas.map(tarjeta => (
              <button
                key={tarjeta.id}
                className={`px-6 py-3 font-medium text-lg focus:outline-none transition-all ${
                  activeTab === tarjeta.id 
                    ? 'text-accent border-b-2 border-accent' 
                    : 'text-white hover:text-accent'
                }`}
                onClick={() => setActiveTab(tarjeta.id)}
              >
                {tarjeta.titulo}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          {tarjetas.map(tarjeta => (
            <div
              key={tarjeta.id}
              className={`transition-opacity duration-300 ${
                activeTab === tarjeta.id ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <p className="text-white text-center mb-10 opacity-80">
                {tarjeta.descripcion}
              </p>

              <div className="space-y-8">
                {tarjeta.Lista.map(item => (
                  <div key={item.id} className="bg-light bg-opacity-5 p-6 rounded-lg transform transition-all hover:scale-105">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 md:mb-0">{item.Nivel}</h3>
                      <div className="text-sm text-accent font-medium">
                        {item.FechaInicio} a {item.FechaFin}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">{item.descripcion}</h4>
                    <p className="text-gray-400">{item.Institucion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;