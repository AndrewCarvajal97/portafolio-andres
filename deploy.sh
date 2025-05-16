#!/bin/bash

# Script para construir y desplegar manualmente a GitHub Pages
# Coloca este archivo en la raíz de tu proyecto y ejecútalo con bash deploy.sh

# Abortar en caso de errores
set -e

# Construir la aplicación
npm run build

# Asegurarse de que .nojekyll existe
touch dist/.nojekyll

# Moverse al directorio de construcción
cd dist

# Iniciar un repositorio Git si no existe
if [ ! -d ".git" ]; then
  git init
  git checkout -b gh-pages
  git remote add origin https://github.com/yourusername/portafolio-andres.git  # Reemplaza con tu repo
else
  git checkout gh-pages
fi

# Añadir todos los archivos
git add -A

# Commit con fecha
git commit -m "Deploy manual: $(date)"

# Forzar push a la rama gh-pages
git push -f origin gh-pages

# Volver al directorio principal
cd ..

echo "¡Despliegue completado!"
