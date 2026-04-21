import type { Experience, FAQItem, ProcessStep, Project, Service, SkillCategory } from "@/types";

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
    id: "nova-agent",
    title: "NOVA - AI Agent",
    description:
      "Agente IA autonomo para prospeccion B2B: investiga empresas desde su web, redacta emails personalizados con Claude y gestiona cola de aprobacion humana con envio automatizado.",
    technologies: [
      "Go 1.26",
      "Chi",
      "PostgreSQL",
      "Claude API",
      "Resend",
      "Docker",
    ],
    githubUrl: "https://github.com/julianbecerra13/nova",
    highlights: [
      "Prompt caching en Claude reduce 90% el costo de tokens",
      "Pipeline research -> draft -> approve -> send con 9 endpoints REST",
      "Arquitectura modular con pgx pool y rate limiting por hora",
    ],
  },
  {
    id: "ai-ticket-agent",
    title: "AI Ticket Agent",
    description:
      "Backend que clasifica tickets de soporte con scikit-learn y delega la accion a un agente LLM intercambiable (Claude, OpenAI u Ollama). Bring-your-own API key.",
    technologies: [
      "Python 3.12",
      "FastAPI",
      "PostgreSQL 16",
      "scikit-learn",
      "Claude / OpenAI / Ollama",
      "Docker",
    ],
    githubUrl: "https://github.com/julianbecerra13/ai-ticket-agent",
    highlights: [
      "ML clasico (scikit-learn) + agente LLM moderno en un solo pipeline",
      "Provider de LLM intercambiable via configuracion",
      "Automatiza responder, escalar, pedir info o cerrar duplicados",
    ],
  },
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

export const services: Service[] = [
  {
    id: "landing",
    title: "Landing Profesional",
    description:
      "Sitio de una pagina optimizado para convertir visitantes en clientes. Ideal para lanzamiento de productos, eventos o servicios.",
    priceFrom: "$900.000 COP",
    duration: "5-10 dias",
    features: [
      "Diseno responsive moderno con tu identidad",
      "Next.js + Tailwind (carga < 1s)",
      "SEO tecnico y meta tags optimizados",
      "Formulario de contacto con notificaciones",
      "Integracion con Google Analytics",
      "Deploy en Vercel/Netlify",
      "1 mes de soporte incluido",
    ],
  },
  {
    id: "web-app",
    title: "Web App a Medida",
    description:
      "Aplicacion web completa con backend, base de datos y panel administrativo. Para negocios que necesitan automatizar procesos.",
    priceFrom: "$3.500.000 COP",
    duration: "3-6 semanas",
    highlighted: true,
    features: [
      "Frontend Next.js 16 + backend Go o NestJS",
      "Autenticacion JWT / OAuth 2.0",
      "Base de datos relacional (PostgreSQL/MySQL)",
      "Panel de administracion",
      "Integraciones (pagos, analytics, APIs)",
      "CI/CD con GitHub Actions",
      "Documentacion tecnica + capacitacion",
      "3 meses de soporte post-entrega",
    ],
  },
  {
    id: "mobile-app",
    title: "App Movil Flutter",
    description:
      "Aplicacion movil nativa para Android e iOS desde un solo codigo. Chat en tiempo real, pagos, notificaciones push y mas.",
    priceFrom: "$4.500.000 COP",
    duration: "5-8 semanas",
    features: [
      "Flutter (Android + iOS desde un codigo)",
      "Arquitectura Clean + Riverpod",
      "Firebase Auth, Firestore, FCM",
      "Chat en tiempo real / videollamadas",
      "Integracion con pagos (Wompi/Stripe)",
      "Publicacion en Play Store",
      "3 meses de soporte post-entrega",
    ],
  },
  {
    id: "integraciones",
    title: "Integraciones Puntuales",
    description:
      "Conecta tu plataforma con servicios externos: pagos, WhatsApp Business, redes sociales o Google Workspace.",
    priceFrom: "$800.000 COP",
    duration: "3-7 dias",
    features: [
      "Pasarelas de pago (Wompi, Stripe)",
      "WhatsApp Business Cloud API",
      "Meta API (Instagram, Messenger, Facebook)",
      "Google APIs (Maps, Analytics, Calendar)",
      "OAuth 2.0 con refresh automatico",
      "Webhooks y procesamiento async",
      "Testing + documentacion",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Completo",
    description:
      "Tienda online lista para vender: catalogo, carrito, checkout, pagos y panel para gestionar productos y pedidos.",
    priceFrom: "$2.800.000 COP",
    duration: "2-4 semanas",
    features: [
      "Catalogo con variantes y stock",
      "Carrito + checkout optimizado",
      "Integracion Wompi / Stripe",
      "Panel admin para productos y pedidos",
      "Envio de emails transaccionales",
      "SEO y performance optimizados",
      "2 meses de soporte post-entrega",
    ],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Mensual",
    description:
      "Mantengo tu plataforma funcionando, segura y actualizada. Incluye mejoras pequenas para que evolucione con tu negocio.",
    priceFrom: "$600.000 COP / mes",
    duration: "Mensual",
    features: [
      "Monitoreo y correccion de bugs",
      "Actualizaciones de seguridad",
      "Hasta 8 horas de mejoras / mes",
      "Backups y verificaciones de uptime",
      "Reporte mensual de estado",
      "Soporte prioritario por WhatsApp/email",
      "Descuento en nuevos desarrollos",
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "briefing",
    number: "01",
    title: "Briefing y cotizacion",
    duration: "1-2 dias",
    description:
      "Agendamos una reunion corta para entender tu necesidad, alcance, plazos y presupuesto. Te envio una cotizacion formal con entregables claros y cronograma.",
  },
  {
    id: "diseno",
    number: "02",
    title: "Diseno y planificacion",
    duration: "3-7 dias",
    description:
      "Definimos arquitectura tecnica, wireframes si aplica, stack exacto y dividimos el proyecto en hitos. Firmamos acuerdo con cronograma y forma de pago.",
  },
  {
    id: "desarrollo",
    number: "03",
    title: "Desarrollo iterativo",
    duration: "Variable",
    description:
      "Trabajo por sprints semanales con entregas incrementales. Cada semana ves avances reales, pruebas en ambiente de staging y das feedback para ajustar.",
  },
  {
    id: "lanzamiento",
    number: "04",
    title: "Lanzamiento y soporte",
    duration: "Continuo",
    description:
      "Deploy a produccion, capacitacion de uso, documentacion tecnica entregada y periodo de garantia incluido. Siempre disponible para soporte o mejoras.",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "solo-o-equipo",
    question: "Trabajas solo o con equipo?",
    answer:
      "Soy el desarrollador principal en todos mis proyectos, lo que garantiza coherencia tecnica y un unico punto de contacto. Cuando un proyecto lo requiere, colaboro con disenadores UX/UI y QA de confianza para entregar resultados profesionales sin intermediarios.",
  },
  {
    id: "forma-de-pago",
    question: "Como se maneja el pago?",
    answer:
      "Para proyectos fijos trabajo con esquema 50% al inicio / 50% al entregar, o por hitos en proyectos largos. Acepto transferencia bancaria en Colombia, Wompi, Stripe o pagos internacionales via Wise / PayPal. Factura electronica disponible.",
  },
  {
    id: "cotizacion",
    question: "Cuanto demora recibir una cotizacion?",
    answer:
      "Despues de nuestra primera reunion, envio una propuesta formal en maximo 48 horas con alcance detallado, entregables, plazo y precio cerrado. Sin costo y sin compromiso.",
  },
  {
    id: "garantia",
    question: "Ofreces garantia despues de la entrega?",
    answer:
      "Si. Todos los proyectos incluyen un periodo de soporte post-entrega (1 a 3 meses segun el paquete) donde corrijo cualquier bug sin costo. Despues ofrezco planes de mantenimiento mensual si quieres continuar con soporte.",
  },
  {
    id: "cambios",
    question: "Que pasa si necesito cambios durante el proyecto?",
    answer:
      "Los ajustes razonables dentro del alcance acordado estan incluidos. Si el cambio amplia el alcance (features nuevos), lo cotizo aparte antes de ejecutarlo para que tengas control total sobre costos.",
  },
  {
    id: "escalar",
    question: "Puedo escalar el proyecto despues?",
    answer:
      "Claro. Todos mis proyectos se construyen con arquitectura modular pensando en crecimiento: nuevas integraciones, mas usuarios, mas features. Soy el mismo dev que mantendra el codigo, asi que la continuidad esta garantizada.",
  },
  {
    id: "fuera-colombia",
    question: "Atiendes clientes fuera de Colombia?",
    answer:
      "Si, trabajo remoto con clientes de toda Latinoamerica, Estados Unidos y Europa. Cotizo en USD o EUR para clientes internacionales y manejo reuniones en horarios flexibles.",
  },
];
