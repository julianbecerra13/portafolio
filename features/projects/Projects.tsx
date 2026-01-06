"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FadeInSection } from "@/ui/animations/FadeInSection";
import { ProjectCard } from "@/ui/cards/ProjectCard";
import { projects, profileLabels, ProfileType, personalInfo } from "@/content/projects-data";
import { motion } from "framer-motion";

type FilterType = "all" | ProfileType;

const filters: { key: FilterType; label: string; description: string }[] = [
  { key: "all", label: "Todos", description: "Ver todos los proyectos" },
  { key: "frontend", ...profileLabels.frontend },
  { key: "backend", ...profileLabels.backend },
  { key: "fullstack", ...profileLabels.fullstack },
];

function ProjectsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // Leer filtro de URL al cargar
  useEffect(() => {
    const profileParam = searchParams.get("profile");
    if (
      profileParam &&
      ["frontend", "backend", "fullstack"].includes(profileParam)
    ) {
      setActiveFilter(profileParam as ProfileType);
    }
  }, [searchParams]);

  // Actualizar URL cuando cambia el filtro
  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);

    // Actualizar query params
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "all") {
      params.delete("profile");
    } else {
      params.set("profile", filter);
    }

    const newUrl = params.toString() ? `?${params.toString()}` : "/";
    router.push(newUrl, { scroll: false });
  };

  // Filtrar proyectos
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.profiles.includes(activeFilter));

  return (
    <>
      {/* Filtros */}
      <FadeInSection delay={0.1}>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => handleFilterChange(filter.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
              }`}
            >
              {filter.label}
              {/* Tooltip con descripción */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-700">
                {filter.description}
              </span>
            </motion.button>
          ))}
        </div>
      </FadeInSection>

      {/* Contador de resultados */}
      <FadeInSection delay={0.15}>
        <div className="text-center mb-8">
          <span className="text-gray-500 text-sm">
            Mostrando {filteredProjects.length} de {projects.length} proyectos
          </span>
        </div>
      </FadeInSection>

      {/* Grid de proyectos */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <FadeInSection delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeInSection>
          </motion.div>
        ))}
      </motion.div>

      {/* Mensaje si no hay proyectos */}
      {filteredProjects.length === 0 && (
        <FadeInSection>
          <div className="text-center py-16">
            {activeFilter === "backend" ? (
              // Mensaje especial para backend
              <div className="max-w-md mx-auto">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-pink-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Backend en construcción
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Estoy publicando un API Starter con JWT + PostgreSQL + Docker + Swagger.
                    Mi experiencia backend ha sido principalmente en productos internos (L4F, Freelance).
                    Puedo mostrar repos/demos en entrevista.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full font-semibold transition-all"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Ver GitHub
                    </a>
                    <button
                      onClick={() => handleFilterChange("all")}
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-semibold transition-colors"
                    >
                      Ver todos
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Mensaje genérico para otros filtros
              <>
                <p className="text-gray-400 text-lg mb-4">
                  No hay proyectos de{" "}
                  {profileLabels[activeFilter as ProfileType]?.label} todavía.
                </p>
                <button
                  onClick={() => handleFilterChange("all")}
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Ver todos los proyectos
                </button>
              </>
            )}
          </div>
        </FadeInSection>
      )}
    </>
  );
}

function ProjectsLoading() {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <div
          key={filter.key}
          className="px-6 py-3 rounded-full bg-gray-800 animate-pulse w-24 h-12"
        />
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Proyectos</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Filtra por el tipo de rol que te interesa
            </p>
          </div>
        </FadeInSection>

        <Suspense fallback={<ProjectsLoading />}>
          <ProjectsContent />
        </Suspense>
      </div>
    </section>
  );
}
