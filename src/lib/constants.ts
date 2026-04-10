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
    id: "floristeria",
    title: "Floristeria",
    description:
      "Aplicacion web para floreria con catalogo de productos, gestion de pedidos y panel de administracion.",
    technologies: ["Next.js", "TypeScript", "Drizzle ORM", "Vercel"],
    githubUrl: "https://github.com/julianbecerra13/floristeria",
    highlights: [
      "Catalogo de productos con busqueda",
      "Drizzle ORM para manejo de datos",
      "Deploy automatico en Vercel",
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

export const stats = [
  { label: "Anos de experiencia", value: "+4" },
  { label: "Proyectos entregados", value: "10+" },
  { label: "Tecnologias dominadas", value: "15+" },
];
