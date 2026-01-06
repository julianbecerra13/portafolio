// 🎯 Datos del portafolio - Actualizado para 3 perfiles

export type ProfileType = "frontend" | "backend" | "fullstack";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  profiles: ProfileType[]; // Nuevo: qué perfiles aplican
  highlights?: string[]; // Nuevo: logros específicos
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TechStore - E-commerce",
    description:
      "Tienda online con catálogo dinámico, filtros avanzados, carrito persistente y checkout. Arquitectura moderna con state management eficiente.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
    imageUrl: "/projects/techstore.jpg",
    githubUrl: "https://github.com/julianbecerra13/techstore",
    liveUrl: "https://lovely-kashata-700da1.netlify.app",
    featured: true,
    profiles: ["frontend", "fullstack"],
    highlights: [
      "Búsqueda en tiempo real con debounce",
      "Carrito persistente con localStorage",
      "Responsive mobile-first",
    ],
  },
  {
    id: 2,
    title: "SalesAnalytics - Dashboard",
    description:
      "Dashboard interactivo para análisis de ventas. Gráficos dinámicos, tablas con filtros, KPIs en tiempo real y exportación de reportes.",
    technologies: ["React", "TypeScript", "Vite", "Recharts", "Material-UI"],
    imageUrl: "/projects/sales-dashboard.jpg",
    githubUrl: "https://github.com/julianbecerra13/sales-analytics",
    liveUrl: "https://wondrous-smakager-1dc987.netlify.app",
    featured: true,
    profiles: ["frontend", "fullstack"],
    highlights: [
      "Gráficos interactivos con Recharts",
      "Filtros combinados por fecha/categoría",
      "Exportación a CSV/PDF",
    ],
  },
  {
    id: 3,
    title: "InventoryPro - Gestión de Inventario",
    description:
      "Sistema completo de gestión de inventario con dashboard de estadísticas, CRUD de productos, alertas de stock bajo y reportes.",
    technologies: ["Vue 3", "TypeScript", "Vite", "PrimeVue", "Pinia"],
    imageUrl: "/projects/inventory-pro.jpg",
    githubUrl: "https://github.com/julianbecerra13/inventory-pro",
    liveUrl: "https://startling-fenglisu-e50674.netlify.app",
    featured: true,
    profiles: ["frontend", "fullstack"],
    highlights: [
      "CRUD completo con validaciones",
      "Alertas automáticas de stock",
      "Gráficos de movimientos",
    ],
  },
  {
    id: 4,
    title: "MediBook - Sistema de Citas",
    description:
      "Sistema de gestión de citas médicas con calendario interactivo, wizard de reservas, gestión de horarios y catálogo de servicios.",
    technologies: ["Angular 17", "TypeScript", "Angular Material", "RxJS", "SCSS"],
    imageUrl: "/projects/booking-system.jpg",
    githubUrl: "https://github.com/julianbecerra13/medibook",
    liveUrl: "https://boisterous-donut-5dad22.netlify.app",
    featured: true,
    profiles: ["frontend"],
    highlights: [
      "Calendario semanal drag & drop",
      "Wizard multi-step para reservas",
      "Validación de disponibilidad",
    ],
  },
  {
    id: 5,
    title: "WalletApp - Finanzas Personales",
    description:
      "App móvil de finanzas con dashboard de balance, gráficos de gastos, categorización automática y seguimiento de metas de ahorro.",
    technologies: ["Flutter", "Dart", "Provider", "fl_chart"],
    imageUrl: "/projects/wallet-app.jpg",
    githubUrl: "https://github.com/julianbecerra13/wallet-app",
    liveUrl: "https://cute-speculoos-24ffb9.netlify.app",
    featured: true,
    profiles: ["frontend", "fullstack"],
    highlights: [
      "Gráficos animados con fl_chart",
      "Persistencia local con SQLite",
      "UI adaptativa iOS/Android",
    ],
  },
  {
    id: 6,
    title: "TaskFlow - Gestor de Tareas",
    description:
      "App de productividad con categorías, prioridades, fechas de vencimiento, notificaciones y sincronización entre dispositivos.",
    technologies: ["Flutter", "Dart", "Provider", "intl"],
    imageUrl: "/projects/task-flow.jpg",
    githubUrl: "https://github.com/julianbecerra13/task-flow",
    liveUrl: "https://joyful-crumble-b0d334.netlify.app",
    featured: true,
    profiles: ["frontend"],
    highlights: [
      "Filtros por categoría/prioridad",
      "Notificaciones programadas",
      "Tema claro/oscuro",
    ],
  },
];

// 🎯 Experiencia laboral unificada
export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  achievements: string[]; // Nuevo: logros específicos
  mainTechnologies: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "L4F (C-P-S)",
    position: "Desarrollador Full Stack",
    period: "Julio 2024 - Septiembre 2025",
    current: false,
    description:
      "Desarrollé el backend en Go (Gin) para una app de citas (matches, chat en tiempo real y videollamadas), con autenticación JWT y APIs REST. Despliegue en servidor remoto con Docker.",
    achievements: [
      "Desarrollo de backend en Go (Gin) con MySQL",
      "Autenticación JWT",
      "APIs REST para integración con frontend",
      "Despliegue con Docker en servidor remoto",
    ],
    mainTechnologies: ["Go", "MySQL", "Docker", "REST APIs"],
  },
  {
    id: 2,
    company: "Inovot SAS",
    position: "Desarrollador Full Stack",
    period: "Noviembre 2024 - Julio 2025",
    current: false,
    description:
      "Desarrollo de aplicaciones móviles y paneles de administración. Integración de pasarelas de pago y desarrollo de APIs.",
    achievements: [
      "App móvil Flutter con panel de administración",
      "Panel admin con Next.js y dashboards",
      "Integración de pasarela de pago Wompi",
      "APIs con Node.js (NestJS + TypeScript) para sincronización de datos",
    ],
    mainTechnologies: ["Flutter", "Next.js", "Node.js", "Wompi"],
  },
  {
    id: 3,
    company: "Freelance / Conper",
    position: "Desarrollador Full Stack",
    period: "Mayo 2022 - Junio 2024",
    current: false,
    description:
      "Desarrollo de proyectos variados para múltiples clientes: apps móviles con geolocalización, sistemas CRM y APIs backend.",
    achievements: [
      "HeyMotoTaxi: App Flutter + API Go/Gin + MySQL + Google Maps + Stripe",
      "CRM Web pedidos: Flutter Web + Go/Gin + MySQL",
      "App domicilios: Flutter + Go/Gin + MySQL + Google Maps",
    ],
    mainTechnologies: ["Flutter", "Go/Gin", "MySQL", "Google Maps", "Stripe"],
  },
];

// 🎯 Información personal actualizada
export const personalInfo = {
  name: "Julian Becerra",
  title: "Full Stack Developer",
  subtitle: "Go · Node.js · React · Flutter",
  bio: "Construyo APIs escalables y interfaces que convierten usuarios en clientes. Más de 3 años creando productos digitales para startups en Colombia y LATAM.",
  bioExtended: `Soy desarrollador Full Stack con base en Bucaramanga, Colombia.

Mi stack principal: Go y Node.js para APIs, React/Next.js para web, Flutter para móvil. He trabajado en startups donde hice de todo: desde diseñar la base de datos hasta integrar pasarelas de pago.

Me enfoco en entregas claras: código mantenible, componentes reutilizables, control de versiones y despliegues reproducibles con Docker cuando aplica.`,
  email: "becerrarodriguezjulian@gmail.com",
  phone: "+573212001539",
  location: "Bucaramanga, Colombia",
  github: "https://github.com/julianbecerra13",
  linkedin: "https://www.linkedin.com/in/julian-becerra-rodriguez-21060018b",
  // Versiones en inglés para toggle de idioma (futuro)
  bioEN: "I build scalable APIs and interfaces that convert users into customers. 3+ years shipping digital products for startups in LATAM.",
};

// 🎯 Habilidades agrupadas por categoría
export const skillsByCategory = {
  frontend: ["React.js", "Next.js", "Flutter/Dart", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
  backend: ["Go/Golang", "Node.js", "Nest.js", "REST APIs", "MySQL", "PostgreSQL", "Firebase"],
  tools: ["Docker", "Git/GitHub", "Postman", "Stripe", "Wompi", "Vercel", "Netlify"],
};

// Lista plana para compatibilidad
export const skills = [
  ...skillsByCategory.frontend,
  ...skillsByCategory.backend,
  ...skillsByCategory.tools,
];

// 🎯 Labels para filtros de perfil
export const profileLabels: Record<ProfileType, { label: string; description: string }> = {
  frontend: {
    label: "Frontend",
    description: "React, Next.js, Flutter, UI/UX",
  },
  backend: {
    label: "Backend",
    description: "Go, Node.js, APIs, Bases de datos",
  },
  fullstack: {
    label: "Full Stack",
    description: "Proyectos end-to-end",
  },
};
