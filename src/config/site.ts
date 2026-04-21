export const siteConfig = {
  name: "Julian Becerra",
  title: "Full Stack Developer",
  description:
    "Desarrollador Full Stack con +4 anos de experiencia construyendo productos digitales con Go, Next.js y Flutter.",
  url: "https://julianbecerra.netlify.app",
  email: "becerrarodriguezjulian@gmail.com",
  phone: "+573212001539",
  location: "Bucaramanga, Colombia",
  social: {
    github: "https://github.com/julianbecerra13",
    linkedin:
      "https://www.linkedin.com/in/julian-becerra-rodriguez-21060018b",
    freelancer: "https://www.freelancer.com/u/DarkPerridev",
  },
  navItems: [
    { key: "home", label: "Inicio", href: "#inicio" },
    { key: "services", label: "Servicios", href: "#servicios" },
    { key: "process", label: "Proceso", href: "#proceso" },
    { key: "projects", label: "Proyectos", href: "#proyectos" },
    { key: "about", label: "Sobre mi", href: "#sobre-mi" },
    { key: "faq", label: "FAQ", href: "#faq" },
  ] as const,
  cta: {
    key: "cta",
    label: "Cotizar proyecto",
    href: "/cotizar",
  },
  quoteForm: {
    endpoint: "https://formspree.io/f/mvzdbraw",
    whatsappNumber: "573212001539",
  },
};
