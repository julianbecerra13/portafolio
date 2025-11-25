// 🎯 GRITA: "Tarjeta de proyecto con animaciones hover"
"use client";

import { motion } from "framer-motion";
import { Project } from "@/content/projects-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
        <p className="text-gray-400 text-sm">Imagen del proyecto</p>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-purple-400 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              Ver Demo →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
