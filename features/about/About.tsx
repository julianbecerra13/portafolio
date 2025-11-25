// 🎯 GRITA: "Sección sobre mí y mis habilidades"
"use client";

import { FadeInSection } from "@/ui/animations/FadeInSection";
import { motion } from "framer-motion";
import { personalInfo, skills } from "@/content/projects-data";

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Sobre Mí
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conoce más sobre mi experiencia y habilidades
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Información personal */}
          <FadeInSection delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ¿Quién soy?
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Mi pasión es transformar ideas en experiencias digitales increíbles.
                Me encanta aprender nuevas tecnologías y enfrentar desafíos que me
                permitan crecer como desarrollador.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cuando no estoy programando, puedes encontrarme explorando nuevas
                tecnologías, leyendo sobre desarrollo web o contribuyendo a proyectos
                de código abierto.
              </p>
            </div>
          </FadeInSection>

          {/* Columna derecha - Habilidades */}
          <FadeInSection delay={0.4}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Habilidades
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="bg-gray-800 px-6 py-4 rounded-lg border-l-4 border-purple-500 hover:border-pink-500 transition-colors cursor-pointer"
                  >
                    <span className="text-white font-semibold">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
