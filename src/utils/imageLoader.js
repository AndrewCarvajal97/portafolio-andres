/**
 * Utilidad para cargar imágenes temporales durante el desarrollo.
 * 
 * Este archivo se encarga de proporcionar URLs de placeholders para las imágenes
 * que aún no han sido añadidas al proyecto.
 */

/**
 * Comprueba si una imagen existe en la ruta especificada.
 * @param {string} imageSrc - Ruta de la imagen a comprobar
 * @returns {Promise<boolean>} - Promesa que resuelve a true si la imagen existe
 */
export const checkImageExists = async (imageSrc) => {
  try {
    const response = await fetch(imageSrc, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking image:', error);
    return false;
  }
};

/**
 * Obtiene una URL de placeholder para una imagen específica.
 * @param {string} imageName - Nombre de la imagen
 * @param {object} placeholderConfig - Configuración de la imagen placeholder 
 * @returns {string} - URL del placeholder
 */
export const getPlaceholderUrl = (imageName, placeholderConfig) => {
  const placeholderImage = placeholderConfig.images.find(img => img.name === imageName);
  
  if (placeholderImage) {
    return placeholderImage.url;
  } else {
    // Placeholder genérico por defecto
    return `https://via.placeholder.com/600x400/1A202C/FFFFFF?text=${imageName.replace('.jpg', '').replace('-', '+')}`;
  }
};

/**
 * Carga el archivo de configuración de imágenes placeholder.
 * @returns {Promise<object>} - Promesa que resuelve a la configuración de placeholders
 */
export const loadPlaceholderConfig = async () => {
  try {
    const response = await fetch('/images/placeholder-images.json');
    if (!response.ok) {
      throw new Error('Failed to load placeholder configuration');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading placeholder configuration:', error);
    return { images: [] };
  }
};

/**
 * Determina la URL de la imagen final, usando un placeholder si la imagen real no existe.
 * @param {string} imagePath - Ruta de la imagen
 * @returns {Promise<string>} - Promesa que resuelve a la URL final
 */
export const getImageUrl = async (imagePath) => {
  const imageName = imagePath.split('/').pop();
  const imageExists = await checkImageExists(imagePath);
  
  if (imageExists) {
    return imagePath;
  } else {
    const placeholderConfig = await loadPlaceholderConfig();
    return getPlaceholderUrl(imageName, placeholderConfig);
  }
};
