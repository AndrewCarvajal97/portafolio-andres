import React, { useState } from 'react';
import { datosPerfil } from '../../constants/perfil';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de envío exitoso (en un entorno real, aquí iría la lógica para enviar el formulario)
    try {
      // Aquí iría el código para enviar el formulario a un servicio de backend
      console.log("Formulario enviado:", formData);
      setFormSubmitted(true);
      setSubmitError(false);
      
      // Limpiar el formulario después de enviar
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Después de 5 segundos, ocultar el mensaje de éxito
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
      setSubmitError(true);
      
      // Después de 5 segundos, ocultar el mensaje de error
      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contáctame</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o propuesta de proyecto? No dudes en ponerte en contacto conmigo. Estaré encantado de escuchar tus ideas y explorar posibles colaboraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
            <p className="text-gray-400 mb-8">
              Estoy disponible para proyectos freelance, oportunidades laborales o simplemente para charlar sobre tecnología y desarrollo. No dudes en contactarme a través de cualquiera de estos medios.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href={`mailto:${datosPerfil.contacto.email}`} className="text-gray-400 hover:text-accent transition-colors">
                    {datosPerfil.contacto.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">WhatsApp</h4>
                  <a href={`https://wa.me/${datosPerfil.contacto.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                    {datosPerfil.contacto.whatsapp}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">GitHub</h4>
                  <a href={datosPerfil.contacto.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                    {datosPerfil.contacto.github.replace('https://github.com/', '')}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-accent bg-opacity-20 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">LinkedIn</h4>
                  <a href={datosPerfil.contacto.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                    {datosPerfil.nombre}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
            
            {formSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                <p>Tu mensaje ha sido enviado con éxito. Me pondré en contacto contigo lo antes posible.</p>
              </div>
            )}
            
            {submitError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                <p>Ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo nuevamente.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-light bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-light bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tu email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-light bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Asunto del mensaje"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-light bg-opacity-10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-opacity-90 transition-all"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;