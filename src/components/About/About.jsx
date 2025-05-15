import React from 'react';
import { datosPerfil } from '../../constants/perfil';
import { habilidadesTecnicas, habilidadesBlandas } from '../../constants/habilidades';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">Conoce mi historia</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {datosPerfil.resumen}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="text-accent mr-2">•</span>
                <span className="font-semibold text-dark">Nombre:</span>
                <span className="ml-2 text-gray-700">{datosPerfil.nombre}</span>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">•</span>
                <span className="font-semibold text-dark">Edad:</span>
                <span className="ml-2 text-gray-700">{datosPerfil.edad} años</span>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">•</span>
                <span className="font-semibold text-dark">Profesión:</span>
                <span className="ml-2 text-gray-700">{datosPerfil.profesion}</span>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">•</span>
                <span className="font-semibold text-dark">Experiencia:</span>
                <span className="ml-2 text-gray-700">{datosPerfil.experiencia}</span>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">•</span>
                <span className="font-semibold text-dark">Rol:</span>
                <span className="ml-2 text-gray-700">{datosPerfil.rol}</span>
              </div>
              <div className="flex items-center">
                <span className="text-accent mr-2">•</span>
                <span className="font-semibold text-dark">Email:</span>
                <span className="ml-2 text-gray-700">{datosPerfil.contacto.email}</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#contacto" 
                className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-all"
              >
                Contáctame
              </a>
              <a 
                href="/cv-andres-carvajal.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 border border-accent text-accent font-medium rounded-md hover:bg-accent hover:text-white transition-all"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-6">Mis habilidades</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-dark mb-4">Habilidades técnicas</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {habilidadesTecnicas.map(skill => (
                  <div 
                    key={skill.id} 
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-transform hover:scale-105"
                    style={{ borderTop: `3px solid ${skill.color || '#4C51BF'}` }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: `${skill.color || '#4C51BF'}20` }}
                    >
                      <span className="text-lg font-bold" style={{ color: skill.color || '#4C51BF' }}>
                        {skill.nombre.charAt(0)}
                      </span>
                    </div>
                    <h5 className="font-medium text-center text-dark">{skill.nombre}</h5>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-dark mb-4">Habilidades blandas</h4>
              <div className="flex flex-wrap gap-3">
                {habilidadesBlandas.map(skill => (
                  <span 
                    key={skill.id} 
                    className="px-4 py-2 bg-dark text-white rounded-full text-sm font-medium"
                  >
                    {skill.nombre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;