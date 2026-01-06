"use client";

import { FadeInSection } from "@/ui/animations/FadeInSection";
import { motion } from "framer-motion";
import { workExperience } from "@/content/projects-data";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Experiencia Laboral
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Mi trayectoria profesional como desarrollador
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600"></div>

            {/* Experiencias */}
            {workExperience.map((exp, index) => (
              <FadeInSection key={exp.id} delay={index * 0.2}>
                <motion.div
                  className={`relative mb-12 ${
                    index % 2 === 0
                      ? "md:pr-1/2 md:text-right"
                      : "md:pl-1/2 md:ml-auto"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
                  >
                    <div className="relative ml-8 md:ml-0 flex-1 md:max-w-md">
                      {/* Punto en la timeline */}
                      <div
                        className={`absolute top-6 ${
                          index % 2 === 0
                            ? "md:-right-[2.15rem] -left-[2.15rem]"
                            : "md:-left-[2.15rem] -left-[2.15rem]"
                        } w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-800`}
                      ></div>

                      {/* Tarjeta de experiencia */}
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors"
                      >
                        {/* Periodo */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full font-semibold">
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full font-semibold">
                              Actual
                            </span>
                          )}
                        </div>

                        {/* Empresa y Cargo */}
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-purple-400 font-semibold mb-3">
                          {exp.company}
                        </p>

                        {/* Descripción breve */}
                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        {/* Logros como bullets */}
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tecnologías principales */}
                        <div className="flex flex-wrap gap-2">
                          {exp.mainTechnologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
