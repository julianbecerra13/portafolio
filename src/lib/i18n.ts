export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      process: "Proceso",
      projects: "Proyectos",
      about: "Sobre mi",
      faq: "FAQ",
      cta: "Cotizar proyecto",
    },
    hero: {
      available: "Disponible para proyectos",
      description:
        "Construyo productos digitales end-to-end con Go, Next.js y Flutter. +4 anos entregando plataformas SaaS, apps moviles y APIs escalables.",
      viewServices: "Ver servicios",
      viewProjects: "Ver proyectos",
      downloadCV: "Descargar CV",
      requestQuote: "Cotizar proyecto",
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
    services: {
      title: "Servicios",
      subtitle:
        "Paquetes de desarrollo end-to-end con precios claros y plazos realistas",
      priceFrom: "Desde",
      duration: "Plazo",
      cta: "Cotizar este servicio",
      featured: "Mas popular",
      note: "Precios referenciales desde proyectos sencillos. Cada cotizacion se ajusta al alcance real. Si tu presupuesto es menor, escribeme y buscamos una solucion a tu medida.",
    },
    process: {
      title: "Proceso de trabajo",
      subtitle:
        "Como trabajamos juntos desde la primera conversacion hasta el lanzamiento",
      duration: "Duracion",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional construyendo productos digitales",
      current: "Actual",
    },
    projects: {
      title: "Casos de estudio",
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
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas a lo que clientes suelen preguntar antes de empezar",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Listo para empezar? Hablemos de tu proyecto",
      description:
        "Si tienes un proyecto en mente, una oportunidad laboral o simplemente quieres conectar, no dudes en escribirme.",
      sendEmail: "Enviar email",
      downloadCV: "Descargar CV",
      requestQuote: "Cotizar proyecto",
    },
    cotizar: {
      title: "Cotiza tu proyecto",
      subtitle:
        "Cuentame que necesitas y te envio una propuesta formal en menos de 48 horas",
      form: {
        name: "Nombre completo",
        namePlaceholder: "Como te llamas?",
        company: "Empresa",
        companyPlaceholder: "Nombre de tu empresa (opcional)",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        phone: "Telefono o WhatsApp",
        phonePlaceholder: "+57 300 000 0000",
        service: "Servicio de interes",
        servicePlaceholder: "Selecciona un servicio",
        budget: "Presupuesto aproximado (COP)",
        budgetPlaceholder: "Selecciona un rango",
        deadline: "Plazo deseado",
        deadlinePlaceholder: "Ej: 2 meses, flexible, urgente...",
        message: "Cuentame sobre tu proyecto",
        messagePlaceholder:
          "Describe tu idea, objetivos, tecnologias que te interesen, o cualquier detalle util...",
        submit: "Enviar cotizacion",
        submitting: "Enviando...",
        success:
          "Listo! Recibi tu solicitud. Te respondo en menos de 48 horas.",
        error:
          "Hubo un problema enviando el formulario. Intenta de nuevo o escribeme directo al email.",
        required: "Campo obligatorio",
        backHome: "Volver al inicio",
        budgetRanges: [
          "Menos de $1M COP",
          "$1M - $3M COP",
          "$3M - $7M COP",
          "$7M - $15M COP",
          "Mas de $15M COP",
          "Aun no lo tengo claro",
        ],
      },
      sidebar: {
        title: "Que pasa despues?",
        step1Title: "Reviso tu solicitud",
        step1Desc: "En 24-48 horas laborales.",
        step2Title: "Agendamos llamada",
        step2Desc: "30 minutos para entender el proyecto a fondo.",
        step3Title: "Recibes propuesta",
        step3Desc: "Alcance detallado, plazo y precio cerrado.",
        contactAlt: "O escribeme directo por estos medios:",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      projects: "Projects",
      about: "About",
      faq: "FAQ",
      cta: "Request quote",
    },
    hero: {
      available: "Available for projects",
      description:
        "I build end-to-end digital products with Go, Next.js and Flutter. 4+ years delivering SaaS platforms, mobile apps and scalable APIs.",
      viewServices: "View services",
      viewProjects: "View projects",
      downloadCV: "Download CV",
      requestQuote: "Request quote",
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
    services: {
      title: "Services",
      subtitle:
        "End-to-end development packages with clear pricing and realistic timelines",
      priceFrom: "From",
      duration: "Timeline",
      cta: "Request this service",
      featured: "Most popular",
      note: "Starter prices for simple projects. Each quote is tailored to actual scope. If your budget is lower, reach out and we'll find a solution.",
    },
    process: {
      title: "Work process",
      subtitle: "How we'll work together from first call to launch",
      duration: "Duration",
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey building digital products",
      current: "Current",
    },
    projects: {
      title: "Case studies",
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
    faq: {
      title: "Frequently asked",
      subtitle: "Answers to what clients usually ask before starting",
    },
    contact: {
      title: "Contact",
      subtitle: "Ready to start? Let's talk about your project",
      description:
        "If you have a project in mind, a job opportunity or simply want to connect, feel free to reach out.",
      sendEmail: "Send email",
      downloadCV: "Download CV",
      requestQuote: "Request quote",
    },
    cotizar: {
      title: "Request a quote",
      subtitle: "Tell me what you need and I'll send a formal proposal in less than 48 hours",
      form: {
        name: "Full name",
        namePlaceholder: "What's your name?",
        company: "Company",
        companyPlaceholder: "Company name (optional)",
        email: "Email",
        emailPlaceholder: "you@email.com",
        phone: "Phone or WhatsApp",
        phonePlaceholder: "+57 300 000 0000",
        service: "Service of interest",
        servicePlaceholder: "Select a service",
        budget: "Approximate budget (COP)",
        budgetPlaceholder: "Select a range",
        deadline: "Desired timeline",
        deadlinePlaceholder: "E.g. 2 months, flexible, urgent...",
        message: "Tell me about your project",
        messagePlaceholder:
          "Describe your idea, goals, technologies you're interested in, or any useful details...",
        submit: "Send request",
        submitting: "Sending...",
        success: "Done! I received your request. I'll reply within 48 hours.",
        error:
          "There was a problem submitting the form. Please try again or email me directly.",
        required: "Required field",
        backHome: "Back to home",
        budgetRanges: [
          "Under $1M COP",
          "$1M - $3M COP",
          "$3M - $7M COP",
          "$7M - $15M COP",
          "Over $15M COP",
          "Not sure yet",
        ],
      },
      sidebar: {
        title: "What happens next?",
        step1Title: "I review your request",
        step1Desc: "Within 24-48 business hours.",
        step2Title: "We schedule a call",
        step2Desc: "30 minutes to understand the project deeply.",
        step3Title: "You get a proposal",
        step3Desc: "Detailed scope, timeline and final price.",
        contactAlt: "Or reach me directly through:",
      },
    },
  },
} as const;
