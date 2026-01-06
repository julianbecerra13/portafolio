"use client";

import { FadeInSection } from "@/ui/animations/FadeInSection";
import { motion } from "framer-motion";
import { personalInfo, skillsByCategory } from "@/content/projects-data";

export function About() {
  const bioLines = personalInfo.bioExtended.split("\n\n");

  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Sobre Mí</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conoce más sobre mi experiencia y habilidades
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Información personal */}
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ¿Quién soy?
              </h3>
              {bioLines.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Ubicación */}
              <div className="pt-4 flex items-center gap-2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </FadeInSection>

          {/* Columna derecha - Habilidades por categoría */}
          <FadeInSection delay={0.4}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white">Habilidades</h3>

              {/* Frontend */}
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.frontend.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-600/30 hover:border-purple-500 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div>
                <h4 className="text-lg font-semibold text-pink-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.backend.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-pink-600/20 text-pink-300 rounded-lg text-sm font-medium border border-pink-600/30 hover:border-pink-500 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  Herramientas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillsByCategory.tools.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-600/30 hover:border-blue-500 transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
