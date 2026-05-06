# 🎾 Adelux Padel Club - React

Landing page premium para **Adelux Padel Club & Community**, construida con React + Vite.

## 🚀 Tecnologías

- **React 19** - Librería de UI basada en componentes
- **Vite** - Bundler ultra-rápido con HMR
- **Vanilla CSS** - Estilos modulares por componente
- **GitHub Actions** - Pipeline CI/CD automatizado
- **GitHub Pages** - Hosting gratuito

## 📂 Estructura del Proyecto

```
src/
├── components/      # Componentes de UI (Navbar, Hero, About, etc.)
├── hooks/           # Custom hooks (useRevealOnScroll, useCountUp, useImageSlider)
├── data/            # Datos estáticos (testimonials)
├── App.jsx          # Componente raíz
├── App.css          # Estilos globales de la app
├── index.css        # Reset CSS y variables
└── main.jsx         # Punto de entrada
```

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar el build
npm run preview
```

## 🔄 Pipeline CI/CD

El proyecto usa **GitHub Actions** para despliegue automático:

1. `git push` a la rama `main`
2. GitHub Actions ejecuta el build automáticamente
3. Los archivos optimizados se despliegan en GitHub Pages

## 📐 Arquitectura

La aplicación sigue una arquitectura **basada en componentes**:

- **Componentes funcionales** con hooks de React
- **Custom hooks** para lógica reutilizable (scroll animations, counters)
- **Datos separados** en su propio directorio
- **CSS co-localizado** junto a cada componente

## 👥 Autor

Adelux Padel Club © 2025
