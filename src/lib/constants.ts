import type { Experience, Project, SkillCategory } from "@/types";

export const experiences: Experience[] = [
  {
    id: "gsa",
    company: "GSA - Marketing Hub",
    position: "Desarrollador Full Stack",
    period: "Ene. 2026 - Presente",
    current: true,
    description:
      "Plataforma SaaS de marketing digital con CRM, inbox multicanal, campanas, SEO y billing.",
    achievements: [
      "Desarrollo frontend con Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 y shadcn/ui",
      "Backend modular en Go (Chi) con patrones DDD: integraciones OAuth, webhooks, SEO y mensajeria",
      "App movil Flutter con Riverpod, Firebase Auth y FCM para Inbox y Leads",
      "Sistema de integraciones centralizado con ConnectionPool, auto-refresh de tokens y catalogo de 73 proveedores",
      "Encriptacion AES-256-GCM para credenciales OAuth en Firestore",
      "CI/CD con GitHub Actions, deploy en Vercel (frontend) y Cloud Run (backend con Docker)",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Go",
      "Chi",
      "Flutter",
      "Firebase",
      "Firestore",
      "Docker",
      "OAuth 2.0",
      "Vercel",
      "Cloud Run",
    ],
  },
  {
    id: "l4f",
    company: "L4F (C-P-S)",
    position: "Desarrollador Full Stack (Go + Flutter)",
    period: "Jul. 2024 - Presente",
    current: true,
    description:
      "App de citas con matches, chat en tiempo real, videollamadas y notificaciones.",
    achievements: [
      "APIs REST en Go (Gin) para matches, chat real-time, videollamadas y notificaciones FCM",
      "Autenticacion JWT, validaciones del lado servidor y manejo consistente de respuestas",
      "Frontend movil en Flutter con consumo de APIs e integracion de flujos de sesion",
      "Despliegue backend con Docker en servidor y CI/CD con GitHub Actions",
    ],
    technologies: [
      "Go",
      "Gin",
      "MySQL",
      "JWT",
      "Flutter",
      "Docker",
      "FCM",
      "GitHub Actions",
    ],
  },
  {
    id: "inovot",
    company: "Inovot",
    position: "Desarrollador Full Stack",
    period: "Nov. 2024 - Jul. 2025",
    current: false,
    description:
      "App movil Flutter y panel administrativo web para gestion de usuarios, metas y administracion.",
    achievements: [
      "App movil Flutter y panel admin web en Next.js/React con dashboards de gestion",
      "Backend con Go (Gin) y Node.js (NestJS) conectado a DynamoDB con Prisma",
      "Integracion de Wompi para flujos de pagos y compras con validaciones end-to-end",
      "Deploy web en Vercel y releases moviles en Play Store",
    ],
    technologies: [
      "Flutter",
      "React",
      "Next.js",
      "Go",
      "Gin",
      "NestJS",
      "DynamoDB",
      "Prisma",
      "Wompi",
    ],
  },
  {
    id: "conper",
    company: "Freelance / Conper",
    position: "Desarrollador Full Stack",
    period: "May. 2022 - Jun. 2024",
    current: false,
    description:
      "Multiples proyectos de movilidad, domicilios y CRM para clientes en Colombia.",
    achievements: [
      "3 apps moviles en Flutter (iOS/Android) para movilidad y domicilios con Google Maps",
      "CRM web en Flutter Web para gestion de pedidos y operaciones internas",
      "Backend en Go (Gin) con MySQL para operaciones CRUD y logica de negocio",
      "Integracion de Stripe para pagos y soporte operativo post-entrega",
    ],
    technologies: [
      "Flutter",
      "Go",
      "Gin",
      "MySQL",
      "Google Maps",
      "Stripe",
      "Docker",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "gsa-marketing-hub",
    title: "GSA Marketing Hub",
    description:
      "Plataforma SaaS de marketing digital con CRM, inbox multicanal unificado (WhatsApp, Instagram, Messenger), campanas, herramientas SEO y sistema de billing.",
    technologies: [
      "Next.js 16",
      "Go (Chi)",
      "Flutter",
      "Firebase",
      "OAuth 2.0",
      "Docker",
    ],
    highlights: [
      "Sistema de integraciones con 73 proveedores y encriptacion AES-256-GCM",
      "Inbox multicanal unificado con chat en tiempo real",
      "Arquitectura DDD con modulos independientes",
    ],
  },
  {
    id: "l4f-dating",
    title: "L4F - Dating App",
    description:
      "Aplicacion de citas con sistema de matches, chat en tiempo real, videollamadas y notificaciones push.",
    technologies: ["Go (Gin)", "Flutter", "MySQL", "JWT", "Docker", "FCM"],
    highlights: [
      "Chat en tiempo real con WebSocket",
      "Sistema de matching con algoritmo personalizado",
      "Videollamadas integradas",
    ],
  },
  {
    id: "loopz-colombia",
    title: "Loopz Colombia",
    description:
      "E-commerce de audio premium con catalogo de productos, carrito de compras, autenticacion y pasarela de pagos.",
    technologies: [
      "Next.js 16",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/julianbecerra13/loopz-colombia",
    highlights: [
      "Catalogo dinamico con filtros avanzados",
      "Autenticacion con NextAuth y sesiones seguras",
      "Base de datos PostgreSQL en Neon",
    ],
  },
  {
    id: "iot-lemon",
    title: "IoT Lemon Sorting System",
    description:
      "Sistema IoT para clasificacion automatica de limones usando procesamiento de imagenes y sensores conectados.",
    technologies: ["Go", "IoT", "Image Processing"],
    githubUrl:
      "https://github.com/julianbecerra13/iot-lemon-sorting-system",
    highlights: [
      "Procesamiento de imagenes para clasificacion",
      "Comunicacion con sensores IoT",
      "Backend en Go para procesamiento en tiempo real",
    ],
  },
  {
    id: "colombia-geo",
    title: "Colombia Geo App",
    description:
      "Aplicacion de datos geograficos de Colombia con API REST, autenticacion JWT y base de datos relacional.",
    technologies: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Docker Compose",
    ],
    githubUrl: "https://github.com/julianbecerra13/colombia-geo-app",
    highlights: [
      "API REST con NestJS y documentacion Swagger",
      "Base de datos PostgreSQL con Prisma ORM",
      "Dockerizado con Docker Compose",
    ],
  },
  {
    id: "idea-forge",
    title: "Idea Forge",
    description:
      "Plataforma con agentes de IA que guian el proceso completo de diseno de software: desde la idea inicial hasta la arquitectura tecnica.",
    technologies: [
      "Next.js 15",
      "Go",
      "PostgreSQL",
      "Google Genkit",
      "Gemini 2.0",
      "Docker",
    ],
    githubUrl: "https://github.com/julianbecerra13/idea-forge",
    highlights: [
      "3 agentes IA especializados (ideacion, analisis, arquitectura)",
      "Backend Go con Clean Architecture",
      "Fases interconectadas que construyen sobre las anteriores",
    ],
  },
  {
    id: "prominence-bank",
    title: "Prominence Bank",
    description:
      "Plataforma bancaria completa con banca central y digital: contabilidad de doble partida, KYC, transferencias, instrumentos financieros y auditoria.",
    technologies: [
      "Django",
      "React",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    githubUrl: "https://github.com/julianbecerra13/-prominence-bank-platform",
    highlights: [
      "Motor de contabilidad con partida doble",
      "Flujo maker-checker para aprobaciones",
      "9 tipos de instrumentos bancarios",
    ],
  },
  {
    id: "mern-realtime",
    title: "MERN Realtime Platform",
    description:
      "Aplicacion full stack con autenticacion JWT, OAuth de Google, y sistema de notificaciones en tiempo real con WebSockets.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Jest",
    ],
    githubUrl: "https://github.com/julianbecerra13/mern-realtime-platform",
    highlights: [
      "Notificaciones real-time con Socket.io",
      "Auth JWT con rotacion de tokens + Google OAuth",
      "Testing con Jest y Supertest",
    ],
  },
  {
    id: "aico",
    title: "AICO - Landing Page",
    description:
      "Sitio web oficial para organizacion politica con mapa interactivo de Colombia, sistema de autenticacion y diseno responsive.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/julianbecerra13/aico",
    liveUrl: "https://aico-npzo.vercel.app/",
    highlights: [
      "Mapa interactivo de Colombia por departamentos",
      "Sistema de autenticacion integrado",
      "Animaciones con Framer Motion",
    ],
  },
  {
    id: "vecindario-app",
    title: "Vecindario App",
    description:
      "App movil para comunidades residenciales en Colombia con autenticacion social, notificaciones push, calendario de eventos y gestion de espacios comunes.",
    technologies: [
      "Flutter",
      "Firebase",
      "Riverpod",
      "GoRouter",
      "Cloud Functions",
      "Firestore",
    ],
    githubUrl: "https://github.com/julianbecerra13/vecindario-app",
    highlights: [
      "Auth social con Google y Apple Sign-In",
      "Notificaciones push con Firebase Messaging",
      "Arquitectura modular por features con Riverpod",
    ],
  },
  {
    id: "floristeria",
    title: "Floristeria - E-commerce",
    description:
      "E-commerce de floristeria con catalogo de productos, carrito de compras y base de datos serverless en Neon.",
    technologies: [
      "Next.js 16",
      "React 19",
      "Drizzle ORM",
      "Neon (PostgreSQL)",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/julianbecerra13/floristeria",
    highlights: [
      "Base de datos serverless con Neon y Drizzle ORM",
      "UI con shadcn/ui y Radix primitives",
      "Catalogo dinamico con gestion de productos",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Backend",
    icon: "Server",
    skills: [
      "Go (Gin / Chi)",
      "Node.js (NestJS)",
      "APIs REST",
      "JWT",
      "OAuth 2.0",
      "DDD",
    ],
  },
  {
    name: "Frontend",
    icon: "Monitor",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    name: "Mobile",
    icon: "Smartphone",
    skills: ["Flutter", "Dart", "Riverpod", "Firebase Auth", "FCM", "GoRouter"],
  },
  {
    name: "Bases de datos",
    icon: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase / Firestore",
      "DynamoDB",
      "Prisma",
      "Drizzle",
    ],
  },
  {
    name: "DevOps",
    icon: "Container",
    skills: [
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Cloud Run",
      "CI/CD",
      "Play Store",
    ],
  },
  {
    name: "Integraciones",
    icon: "Plug",
    skills: [
      "Meta API (WhatsApp / IG)",
      "Google APIs",
      "Stripe",
      "Wompi",
      "Google Maps",
      "WebSocket",
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Martinez",
    role: "CEO",
    company: "GSA Marketing Hub",
    text: "Julian es un desarrollador excepcional. Construyo toda nuestra plataforma SaaS de principio a fin: frontend, backend y app movil. Su capacidad para manejar multiples tecnologias y entregar con calidad es impresionante.",
  },
  {
    name: "Andrea Lopez",
    role: "Product Manager",
    company: "Inovot",
    text: "Trabajar con Julian fue una excelente experiencia. Entrego la app movil y el panel web en tiempo record, integro la pasarela de pagos sin problemas y siempre estuvo dispuesto a resolver cualquier reto tecnico.",
  },
  {
    name: "Miguel Torres",
    role: "CTO",
    company: "L4F",
    text: "Julian diseno y construyo nuestro backend completo en Go. Su conocimiento en APIs REST, autenticacion JWT y despliegue con Docker fue clave para lanzar nuestra app de citas con chat en tiempo real.",
  },
  {
    name: "Laura Sanchez",
    role: "Fundadora",
    company: "Conper",
    text: "Contratamos a Julian para 3 proyectos distintos y en todos entrego apps funcionales, bien estructuradas y listas para produccion. Su integracion de Google Maps y Stripe fue impecable.",
  },
];

export const stats = [
  { label: "Anos de experiencia", value: "+4" },
  { label: "Proyectos entregados", value: "12+" },
  { label: "Tecnologias dominadas", value: "15+" },
];
