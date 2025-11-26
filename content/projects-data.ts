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
    description: "E-commerce moderno con catalogo de productos, filtros avanzados, carrito de compras persistente con localStorage, busqueda en tiempo real, wishlist y checkout simulado. Diseño responsive.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand"],
    imageUrl: "/projects/techstore.jpg",
    githubUrl: "https://github.com/julianbecerra13/techstore",
    liveUrl: "https://lovely-kashata-700da1.netlify.app",
    featured: true,
  },
  {
    id: 2,
    title: "SalesAnalytics - Dashboard de Ventas",
    description: "Dashboard interactivo para analisis de ventas. Incluye graficos dinamicos, tablas interactivas con filtros, KPIs, centro de reportes, analisis comparativo y configuracion de usuario.",
    technologies: ["React", "TypeScript", "Vite", "Recharts", "Material-UI"],
    imageUrl: "/projects/sales-dashboard.jpg",
    githubUrl: "https://github.com/julianbecerra13/sales-analytics",
    liveUrl: "https://wondrous-smakager-1dc987.netlify.app",
    featured: true,
  },
  {
    id: 3,
    title: "InventoryPro - Sistema de Gestion",
    description: "Sistema de gestion de inventario. Dashboard con estadisticas y graficos, CRUD completo de productos, gestion de categorias, alertas de stock bajo y configuracion.",
    technologies: ["Vue 3", "TypeScript", "Vite", "PrimeVue", "Pinia"],
    imageUrl: "/projects/inventory-pro.jpg",
    githubUrl: "https://github.com/julianbecerra13/inventory-pro",
    liveUrl: "https://startling-fenglisu-e50674.netlify.app",
    featured: true,
  },
  {
    id: 4,
    title: "MediBook - Sistema de Citas Medicas",
    description: "Sistema de gestion de citas medicas. Dashboard con estadisticas, calendario semanal interactivo, wizard de nueva cita, gestion de reservas con filtros y catalogo de servicios.",
    technologies: ["Angular 17", "TypeScript", "Angular Material", "RxJS", "SCSS"],
    imageUrl: "/projects/booking-system.jpg",
    githubUrl: "https://github.com/julianbecerra13/medibook",
    liveUrl: "https://boisterous-donut-5dad22.netlify.app",
    featured: true,
  },
  {
    id: 5,
    title: "WalletApp - Control de Finanzas",
    description: "App de finanzas personales con dashboard de balance, grafico de gastos semanales, estadisticas por categoria con grafico de pie, agregar transacciones y tema oscuro moderno.",
    technologies: ["Flutter", "Dart", "Provider", "fl_chart"],
    imageUrl: "/projects/wallet-app.jpg",
    githubUrl: "https://github.com/julianbecerra13/wallet-app",
    liveUrl: "https://cute-speculoos-24ffb9.netlify.app",
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
  github: "https://github.com/julianbecerra13",
  linkedin: "https://www.linkedin.com/in/julian-becerra-rodriguez-21060018b",
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
