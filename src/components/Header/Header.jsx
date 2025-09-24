import React, { useState, useEffect } from 'react';
import { datosPerfil } from '../../constants/perfil';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark bg-opacity-90 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white">
            {datosPerfil.nombreCorto.split(' ')[0]}
            <span className="text-accent">.</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-white hover:text-accent transition-colors">Inicio</a>
          <a href="#sobre-mi" className="text-white hover:text-accent transition-colors">Sobre mí</a>
          <a href="#educacion" className="text-white hover:text-accent transition-colors">Educación</a>
          <a href="#proyectos" className="text-white hover:text-accent transition-colors">Proyectos</a>
          <a href="/hackathon" className="text-white hover:text-accent transition-colors">Hackathon</a>
          <a href="#contacto" className="text-white hover:text-accent transition-colors">Contacto</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark bg-opacity-95 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a href="#inicio" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>Inicio</a>
            <a href="#sobre-mi" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>Sobre mí</a>
            <a href="#educacion" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>Educación</a>
            <a href="#proyectos" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>Proyectos</a>
            <a href="/hackathon" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>Hackathon</a>
            <a href="#contacto" className="text-white hover:text-accent transition-colors" onClick={toggleMenu}>Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;