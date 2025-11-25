// 🎯 GRITA: "Sección que muestra todos mis proyectos"
"use client";

import { FadeInSection } from "@/ui/animations/FadeInSection";
import { ProjectCard } from "@/ui/cards/ProjectCard";
import { projects } from "@/content/projects-data";

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Mis Proyectos
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Aquí están algunos de los proyectos en los que he trabajado.
              Cada uno representa un desafío único y una oportunidad de aprendizaje.
            </p>
          </div>
        </FadeInSection>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <FadeInSection key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
