# 🚀 Portafolio Personal

Portafolio profesional construido con Next.js, TypeScript, Tailwind CSS y Framer Motion. Diseñado con arquitectura screaming y optimizado para despliegue en Netlify.

## ✨ Características

- **Next.js 15** con exportación estática (SSG)
- **TypeScript** para type safety
- **Tailwind CSS** para estilos dark profesionales
- **Framer Motion** para animaciones fluidas
- **Arquitectura Screaming** - carpetas que gritan su propósito
- **100% Estático** - perfecto para Netlify gratuito
- **Responsive Design** - se ve increíble en todos los dispositivos

## 📁 Estructura del Proyecto

```
portfolio/
├── features/              # 🎯 Funcionalidades principales
│   ├── hero/             # Landing y presentación
│   ├── projects/         # Showcase de proyectos
│   ├── about/            # Información sobre ti
│   └── contact/          # Información de contacto
├── ui/                   # 🎯 Componentes de UI reutilizables
│   ├── buttons/          # Botones con animaciones
│   ├── cards/            # Tarjetas de proyecto
│   └── animations/       # Componentes de animación
├── content/              # 🎯 Datos y contenido del sitio
│   └── projects-data.ts  # Información de proyectos y personal
└── app/                  # Next.js App Router
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎨 Personalización

### 1. Editar tu información personal

Abre `content/projects-data.ts` y actualiza:

- Tu nombre
- Título profesional
- Bio
- Email y redes sociales
- Habilidades

### 2. Agregar tus proyectos

En el mismo archivo `content/projects-data.ts`, modifica el array `projects`:

```typescript
{
  id: 1,
  title: "Tu Proyecto",
  description: "Descripción del proyecto",
  technologies: ["React", "Node.js"],
  imageUrl: "/projects/imagen.jpg",
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  featured: true,
}
```

### 3. Cambiar colores

Los colores principales están en Tailwind CSS:
- Púrpura: `purple-400`, `purple-600`, `purple-900`
- Rosa: `pink-400`, `pink-600`, `pink-900`

Puedes cambiarlos en cada componente o crear una paleta personalizada en `tailwind.config.js`.

## 🚀 Despliegue en Netlify

### Opción 1: Deploy desde la UI de Netlify

1. Sube tu proyecto a GitHub
2. Ve a [Netlify](https://netlify.com)
3. Click en "Add new site" > "Import an existing project"
4. Conecta tu repositorio de GitHub
5. Netlify detectará automáticamente la configuración de `netlify.toml`
6. Click en "Deploy"

### Opción 2: Deploy con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login en Netlify
netlify login

# Construir el proyecto
npm run build

# Deploy
netlify deploy --prod
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto estático en la carpeta `out`
- `npm run start` - Inicia el servidor de producción (no necesario para Netlify)
- `npm run lint` - Ejecuta el linter

## 🎯 Arquitectura Screaming

Este proyecto usa "Screaming Architecture", donde los nombres de archivos y carpetas gritan su propósito:

- `features/hero/` - "¡Aquí está la sección Hero!"
- `ui/buttons/` - "¡Aquí están los botones reutilizables!"
- `content/projects-data.ts` - "¡Aquí está toda la información del portafolio!"

Esto hace que el proyecto sea auto-documentado y fácil de navegar.

## 💡 Tips

1. **Imágenes**: Coloca las imágenes de tus proyectos en `public/projects/`
2. **SEO**: Actualiza el `metadata` en `app/layout.tsx`
3. **Animaciones**: Ajusta las animaciones en cada componente según tu gusto
4. **Responsive**: Todos los componentes son responsive por defecto

## 📦 Tecnologías Utilizadas

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Netlify](https://www.netlify.com/)

## 📄 Licencia

Este proyecto es de código abierto. Siéntete libre de usarlo para tu propio portafolio.

---

Hecho con ❤️ usando Next.js y Framer Motion
