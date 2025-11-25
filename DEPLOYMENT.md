# 🚀 Guía Rápida de Deployment en Netlify

## ✅ Paso 1: Preparar tu repositorio

```bash
# Inicializar git (ya está hecho)
git add .
git commit -m "Initial commit - Portfolio completo"

# Crear repositorio en GitHub y subir
git remote add origin https://github.com/TU-USUARIO/tu-repositorio.git
git branch -M main
git push -u origin main
```

## ✅ Paso 2: Deploy en Netlify

### Opción A: Desde la interfaz web (Recomendado)

1. Ve a [https://app.netlify.com](https://app.netlify.com)
2. Click en "Add new site" → "Import an existing project"
3. Selecciona "GitHub" y autoriza Netlify
4. Selecciona tu repositorio
5. Netlify detectará automáticamente:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click en "Deploy site"
7. ¡Listo! Tu sitio estará en línea en 2-3 minutos

### Opción B: Con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## ✅ Paso 3: Configurar dominio personalizado (Opcional)

1. En Netlify, ve a "Site settings" → "Domain management"
2. Click en "Add custom domain"
3. Sigue las instrucciones para configurar tu dominio

## 🎨 Personalización antes de deployar

No olvides actualizar estos archivos con tu información:

1. **content/projects-data.ts**
   - Tu nombre
   - Email
   - Links de redes sociales
   - Proyectos

2. **app/layout.tsx**
   - Título y descripción del sitio

## 🔧 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build local (para probar antes de deploy)
npm run build

# Ver el build localmente
npx serve out
```

## ✨ Tu sitio estará listo con:

- ✅ Diseño dark profesional
- ✅ Animaciones fluidas
- ✅ 100% responsive
- ✅ Optimizado para SEO
- ✅ HTTPS automático (Netlify)
- ✅ CDN global (Netlify)

---

¿Problemas? Revisa la documentación en README-ES.md
