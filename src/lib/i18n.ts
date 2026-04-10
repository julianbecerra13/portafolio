export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mi",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para proyectos",
      description:
        "Construyo productos digitales end-to-end con Go, Next.js y Flutter. +4 anos entregando plataformas SaaS, apps moviles y APIs escalables.",
      viewProjects: "Ver proyectos",
      downloadCV: "Descargar CV",
      scroll: "scroll",
    },
    about: {
      title: "Sobre mi",
      subtitle: "Desarrollador Full Stack enfocado en productos end-to-end",
      bio1: "Soy desarrollador Full Stack con base en Bucaramanga, Colombia.",
      bio2: "He construido plataformas SaaS con dashboards complejos, integraciones OAuth con Meta y Google, sistemas de pagos, APIs con autenticacion JWT y apps publicadas en Play Store. Me enfoco en arquitectura modular, buenas practicas y despliegues productivos.",
      bio3: "Actualmente trabajo en GSA Marketing Hub, una plataforma de marketing digital con CRM, inbox multicanal y herramientas SEO, donde desarrollo frontend, backend y app movil.",
      stats: {
        experience: "Anos de experiencia",
        projects: "Proyectos entregados",
        technologies: "Tecnologias dominadas",
      },
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional construyendo productos digitales",
      current: "Actual",
    },
    projects: {
      title: "Proyectos",
      subtitle: "Productos reales que he construido y entregado",
    },
    skills: {
      title: "Stack Tecnologico",
      subtitle: "Tecnologias que uso diariamente para construir productos",
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen quienes han trabajado conmigo",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Estoy abierto a nuevas oportunidades y proyectos interesantes",
      description:
        "Si tienes un proyecto en mente, una oportunidad laboral o simplemente quieres conectar, no dudes en escribirme.",
      sendEmail: "Enviar email",
      downloadCV: "Descargar CV",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      available: "Available for projects",
      description:
        "I build end-to-end digital products with Go, Next.js and Flutter. 4+ years delivering SaaS platforms, mobile apps and scalable APIs.",
      viewProjects: "View projects",
      downloadCV: "Download CV",
      scroll: "scroll",
    },
    about: {
      title: "About me",
      subtitle: "Full Stack Developer focused on end-to-end products",
      bio1: "I'm a Full Stack Developer based in Bucaramanga, Colombia.",
      bio2: "I've built SaaS platforms with complex dashboards, OAuth integrations with Meta and Google, payment systems, JWT-authenticated APIs and apps published on Play Store. I focus on modular architecture, best practices and production deployments.",
      bio3: "Currently working at GSA Marketing Hub, a digital marketing platform with CRM, multichannel inbox and SEO tools, where I develop frontend, backend and mobile app.",
      stats: {
        experience: "Years of experience",
        projects: "Projects delivered",
        technologies: "Technologies mastered",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey building digital products",
      current: "Current",
    },
    projects: {
      title: "Projects",
      subtitle: "Real products I've built and delivered",
    },
    skills: {
      title: "Tech Stack",
      subtitle: "Technologies I use daily to build products",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What people say about working with me",
    },
    contact: {
      title: "Contact",
      subtitle: "I'm open to new opportunities and interesting projects",
      description:
        "If you have a project in mind, a job opportunity or simply want to connect, feel free to reach out.",
      sendEmail: "Send email",
      downloadCV: "Download CV",
    },
  },
} as const;
