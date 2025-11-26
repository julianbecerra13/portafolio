// 🎯 GRITA: "Tarjeta de proyecto con iconos de tecnologías"
"use client";

import { motion } from "framer-motion";
import { Project } from "@/content/projects-data";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiChartdotjs,
  SiSass,
  SiMui,
  SiVite,
  SiPrimevue,
  SiReactivex
} from "react-icons/si";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { TbBrandReactNative } from "react-icons/tb";

interface ProjectCardProps {
  project: Project;
}

const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "TypeScript": { icon: SiTypescript, color: "#3178c6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  "React": { icon: SiReact, color: "#61dafb" },
  "Vue 3": { icon: SiVuedotjs, color: "#42b883" },
  "Angular 17": { icon: SiAngular, color: "#dd0031" },
  "Vite": { icon: SiVite, color: "#646cff" },
  "PrimeVue": { icon: SiPrimevue, color: "#41b883" },
  "Pinia": { icon: SiVuedotjs, color: "#ffd859" },
  "Chart.js": { icon: SiChartdotjs, color: "#ff6384" },
  "Recharts": { icon: SiChartdotjs, color: "#8884d8" },
  "SCSS": { icon: SiSass, color: "#cc6699" },
  "Zustand": { icon: TbBrandReactNative, color: "#764abc" },
  "Material-UI": { icon: SiMui, color: "#007fff" },
  "Angular Material": { icon: SiMui, color: "#ffc107" },
  "RxJS": { icon: SiReactivex, color: "#b7178c" },
};

const projectGradients: Record<number, string> = {
  1: "from-slate-900 via-blue-900 to-cyan-900", // TechStore - Next.js
  2: "from-slate-900 via-purple-900 to-pink-900", // SalesAnalytics - React
  3: "from-slate-900 via-emerald-900 to-teal-900", // InventoryPro - Vue
  4: "from-slate-900 via-red-900 to-orange-900", // MediBook - Angular
};

export function ProjectCard({ project }: ProjectCardProps) {
  const mainTechs = project.technologies.slice(0, 5);
  const gradient = projectGradients[project.id] || "from-slate-900 via-purple-900 to-pink-900";

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header con iconos de tecnologías */}
      <div className={`relative h-52 bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between`}>
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full" />
        </div>

        {/* Iconos de tecnologías */}
        <div className="relative flex justify-center items-center gap-4 flex-wrap">
          {mainTechs.map((tech, index) => {
            const techData = techIcons[tech];
            if (!techData) return null;
            const IconComponent = techData.icon;
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className="w-14 h-14 rounded-xl bg-gray-900/60 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-white/30 transition-all hover:scale-110"
                  style={{ boxShadow: `0 0 20px ${techData.color}30` }}
                >
                  <IconComponent
                    size={28}
                    style={{ color: techData.color }}
                  />
                </div>
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Badge del framework principal */}
        <div className="relative">
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/20">
            {project.technologies[0]}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex gap-3 pt-4 border-t border-gray-700/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <FiGithub size={18} />
              Codigo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all text-sm font-medium"
            >
              <FiExternalLink size={18} />
              Ver Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
