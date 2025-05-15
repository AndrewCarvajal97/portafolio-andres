import React, { useState } from 'react';
import { proyectos } from '../../constants/proyectos';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="proyectos" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Mis Proyectos</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Estos son algunos de los proyectos en los que he trabajado, demostrando mis habilidades en desarrollo full stack y la implementación de soluciones tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map(proyecto => (
            <div 
              key={proyecto.id} 
              className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 ${
                activeProject === proyecto.id ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => handleProjectClick(proyecto.id)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo}
                  className="w-full h-full  transition-all duration-500 transform hover:scale-100"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400?text=${proyecto.titulo.split(' ').join('+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-dark bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <h3 className="text-white text-xl font-bold">{proyecto.titulo}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {proyecto.tecnologias.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-medium">
                      +{proyecto.tecnologias.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={proyecto.linkGIT} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:underline flex items-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <button 
                    className="text-dark hover:text-accent transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(proyecto.id);
                    }}
                  >
                    {activeProject === proyecto.id ? 'Ver menos' : 'Ver más'}
                  </button>
                </div>
              </div>
              
              {activeProject === proyecto.id && (
                <div className="p-6 pt-0 border-t border-gray-200 mt-2">
                  <p className="text-gray-600 mb-4">
                    {proyecto.descripcion}
                  </p>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Tecnologías utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.tecnologias.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-accent bg-opacity-10 text-accent rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;