import React, { useState, useEffect } from 'react';
import { getImageUrl } from '../../utils/imageLoader';

/**
 * Componente de imagen mejorado que carga placeholders si la imagen original no existe
 * 
 * @param {object} props - Propiedades del componente
 * @param {string} props.src - Ruta de la imagen
 * @param {string} props.alt - Texto alternativo
 * @param {string} props.className - Clases CSS
 * @param {object} props.style - Estilos adicionales
 * @param {function} props.onLoad - Callback para cuando la imagen se carga
 * @param {function} props.onError - Callback para cuando hay un error al cargar la imagen
 * @returns {React.ReactElement} Componente de imagen
 */
const Image = ({ 
  src, 
  alt, 
  className = "", 
  style = {}, 
  onLoad = () => {}, 
  onError = () => {},
  ...rest 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        const finalSrc = await getImageUrl(src);
        setImgSrc(finalSrc);
        setHasError(false);
      } catch (error) {
        console.error('Error loading image:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [src]);

  const handleLoad = (e) => {
    setIsLoading(false);
    onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    setIsLoading(false);
    onError(e);
  };

  return (
    <>
      {isLoading && (
        <div 
          className={`bg-gray-200 animate-pulse ${className}`} 
          style={{ ...style, minHeight: '100px' }}
        />
      )}
      
      <img
        src={imgSrc}
        alt={alt || 'Imagen'}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        style={style}
        onLoad={handleLoad}
        onError={handleError}
        {...rest}
      />
      
      {hasError && (
        <div 
          className={`bg-gray-200 flex items-center justify-center text-gray-500 ${className}`} 
          style={{ ...style, minHeight: '100px' }}
        >
          <span>Imagen no disponible</span>
        </div>
      )}
    </>
  );
};

export default Image;