"use client";

import { motion } from "framer-motion";
import { Project, profileLabels, ProfileType } from "@/content/projects-data";
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
  SiReactivex,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";
import { TbBrandReactNative } from "react-icons/tb";

interface ProjectCardProps {
  project: Project;
}

const techIcons: Record<string, { icon: React.ElementType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  React: { icon: SiReact, color: "#61dafb" },
  "Vue 3": { icon: SiVuedotjs, color: "#42b883" },
  "Angular 17": { icon: SiAngular, color: "#dd0031" },
  Vite: { icon: SiVite, color: "#646cff" },
  PrimeVue: { icon: SiPrimevue, color: "#41b883" },
  Pinia: { icon: SiVuedotjs, color: "#ffd859" },
  "Chart.js": { icon: SiChartdotjs, color: "#ff6384" },
  Recharts: { icon: SiChartdotjs, color: "#8884d8" },
  SCSS: { icon: SiSass, color: "#cc6699" },
  Zustand: { icon: TbBrandReactNative, color: "#764abc" },
  "Material-UI": { icon: SiMui, color: "#007fff" },
  "Angular Material": { icon: SiMui, color: "#ffc107" },
  RxJS: { icon: SiReactivex, color: "#b7178c" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Dart: { icon: SiDart, color: "#0175C2" },
  Provider: { icon: SiFlutter, color: "#54C5F8" },
  fl_chart: { icon: SiChartdotjs, color: "#6C63FF" },
};

const projectGradients: Record<number, string> = {
  1: "from-slate-900 via-blue-900 to-cyan-900",
  2: "from-slate-900 via-purple-900 to-pink-900",
  3: "from-slate-900 via-emerald-900 to-teal-900",
  4: "from-slate-900 via-red-900 to-orange-900",
  5: "from-slate-900 via-sky-900 to-blue-900",
  6: "from-slate-900 via-amber-900 to-orange-900",
};

const profileColors: Record<ProfileType, string> = {
  frontend: "bg-purple-600/20 text-purple-400 border-purple-600/30",
  backend: "bg-pink-600/20 text-pink-400 border-pink-600/30",
  fullstack: "bg-blue-600/20 text-blue-400 border-blue-600/30",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const mainTechs = project.technologies.slice(0, 5);
  const gradient =
    projectGradients[project.id] || "from-slate-900 via-purple-900 to-pink-900";

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600 transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header con iconos de tecnologías */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} p-5 flex flex-col justify-between`}
      >
        {/* Patrón decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
          <div className="absolute bottom-4 left-4 w-24 h-24 border border-white/20 rounded-full" />
        </div>

        {/* Profile badges */}
        <div className="relative flex gap-2 flex-wrap">
          {project.profiles.map((profile) => (
            <span
              key={profile}
              className={`px-2 py-0.5 text-xs font-medium rounded-full border ${profileColors[profile]}`}
            >
              {profileLabels[profile].label}
            </span>
          ))}
        </div>

        {/* Iconos de tecnologías */}
        <div className="relative flex justify-center items-center gap-3 flex-wrap">
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
                  className="w-12 h-12 rounded-xl bg-gray-900/60 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:border-white/30 transition-all hover:scale-110"
                  style={{ boxShadow: `0 0 20px ${techData.color}30` }}
                >
                  <IconComponent size={24} style={{ color: techData.color }} />
                </div>
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {tech}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-400 text-xs"
              >
                <FiCheck className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags de tecnologías */}
        <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 bg-gray-700/50 text-gray-500 text-xs rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Enlaces */}
        <div className="flex gap-2 pt-3 border-t border-gray-700/50">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm font-medium"
            >
              <FiGithub size={16} />
              Código
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all text-sm font-medium"
            >
              <FiExternalLink size={16} />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
