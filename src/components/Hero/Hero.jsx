import React from 'react';
import { datosPerfil } from '../../constants/perfil';

const Hero = () => {
  return (
    <section id="inicio" className="m-15 relative h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-full w-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2">Hola, soy</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {datosPerfil.nombre}
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-accent mb-6">
              {datosPerfil.profesion}
            </h3>
            <p className="text-white opacity-80 text-base md:text-lg mb-8 max-w-lg">
              {datosPerfil.superior.substring(0, 200)}...
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contacto" 
                className="px-6 py-3 bg-accent text-dark font-medium rounded-md hover:bg-opacity-90 transition-all"
              >
                Contáctame
              </a>
              <a 
                href="#proyectos" 
                className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-all"
              >
                Ver proyectos
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-accent">
              <img 
                src={`${import.meta.env.BASE_URL}images/perfil.jpeg`}
                alt={datosPerfil.nombre} 
                className="absolute inset-0 w-full  object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x300?text=PA";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white opacity-70" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;