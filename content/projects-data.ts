// 🎯 GRITA: "Aquí están los datos de todos mis proyectos"
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TechStore - E-commerce de Productos Tech",
    description: "E-commerce moderno construido con Next.js 15, featuring catálogo de productos con filtros avanzados, carrito de compras persistente con localStorage, búsqueda en tiempo real, wishlist y checkout simulado. Diseño responsive con Tailwind CSS. (En desarrollo)",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion"],
    imageUrl: "/projects/techstore.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "SalesAnalytics - Dashboard de Ventas",
    description: "Dashboard interactivo para análisis de ventas con React 18. Incluye gráficos dinámicos con Recharts, tablas interactivas, filtros por fecha, KPIs animados y exportación de reportes. Perfecto para visualización de datos empresariales. (Próximamente)",
    technologies: ["React 18", "TypeScript", "Recharts", "Material-UI", "Context API"],
    imageUrl: "/projects/sales-dashboard.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "InventoryPro - Sistema de Gestión",
    description: "Aplicación de gestión de inventario desarrollada con Vue 3. CRUD completo de productos, gestión de categorías, control de stock, alertas de stock bajo, búsqueda avanzada y filtros. Diseño moderno con PrimeVue. (Próximamente)",
    technologies: ["Vue 3", "TypeScript", "Pinia", "PrimeVue", "Vite"],
    imageUrl: "/projects/inventory-pro.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "BookingSystem - Sistema de Reservas",
    description: "Sistema de reservas empresarial con Angular 17. Calendario interactivo, selección de servicios, formularios reactivos con validación, confirmación de reservas y vista de historial. Arquitectura escalable con RxJS. (Próximamente)",
    technologies: ["Angular 17", "TypeScript", "Angular Material", "RxJS", "SCSS"],
    imageUrl: "/projects/booking-system.jpg",
    featured: true,
  },
];

// 🎯 GRITA: "Experiencia laboral profesional"
export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  period: string;
  current: boolean;
  description: string;
  mainTechnologies: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: "L4F (C-P-S)",
    position: "Desarrollador Full Stack",
    period: "Jul 2024 - Nov 2025",
    current: true,
    description: "Desarrollo completo de aplicación desde cero con backend en Go, base de datos MySQL y despliegue en producción.",
    mainTechnologies: ["Go", "Golang", "MySQL", "Docker"],
  },
  {
    id: 2,
    company: "Inovot SAS",
    position: "Desarrollador Full Stack",
    period: "Nov 2024 - Jul 2025",
    current: false,
    description: "Desarrollo y mantenimiento de aplicaciones móviles y paneles de administración. Integración de pasarelas de pago y desarrollo de APIs backend.",
    mainTechnologies: ["Flutter", "Next.js", "Node.js", "Wompi"],
  },
  {
    id: 3,
    company: "Freelance - Conper",
    position: "Desarrollador Flutter Web/Mobile",
    period: "May 2022 - Jun 2024",
    current: false,
    description: "Desarrollo de múltiples aplicaciones incluyendo clones de plataformas, sistemas CRM, apps para repartidores y soluciones de pagos.",
    mainTechnologies: ["Flutter", "Firebase", "Stripe", "React.js"],
  },
  {
    id: 4,
    company: "Freelance - Conper",
    position: "Desarrollador Web Full Stack",
    period: "May 2022 - Jun 2024",
    current: false,
    description: "Desarrollo de e-commerce completo con frontend en React.js y backend en Nest.js/TypeScript. Trabajo en equipo con integración frontend-backend.",
    mainTechnologies: ["React.js", "Nest.js", "TypeScript", "MySQL"],
  },
  {
    id: 5,
    company: "Freelance - Conper",
    position: "Desarrollador Go Backend",
    period: "May 2022 - Jun 2024",
    current: false,
    description: "Desarrollo de APIs rápidas y reactivas con Go para conectar frontends con bases de datos MySQL. Trabajo bajo plazos ajustados.",
    mainTechnologies: ["Go", "Golang", "MySQL", "REST APIs"],
  },
];

// 🎯 GRITA: "Información personal para el portafolio"
export const personalInfo = {
  name: "Julian David Becerra Rodriguez",
  title: "Desarrollador Full Stack",
  bio: "Persona versátil y capaz de simultanear varias tareas. Con amplia experiencia en entornos laborales en los que se valora el compromiso y la capacidad de trabajar en equipo. Me caracterizo por mi dinamismo, proactividad y entusiasmo. Poseo buenos conocimientos digitales y busco desarrollarme profesionalmente.",
  email: "becerrarodriguezjulian@gmail.com",
  phone: "+573212001539",
  location: "Bucaramanga, Santander - Colombia",
  github: "https://github.com/julian-becerra",
  linkedin: "https://linkedin.com/in/julian-becerra",
};

// 🎯 GRITA: "Habilidades técnicas"
export const skills = [
  "Flutter/Dart",
  "React.js",
  "Next.js",
  "Nest.js",
  "TypeScript",
  "Go/Golang",
  "Node.js",
  "Firebase",
  "MySQL",
  "Docker",
  "Stripe",
  "Wompi",
  "Google Ads",
  "Git/GitHub",
  "Postman",
  "REST APIs",
];
