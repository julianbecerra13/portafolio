// 🎯 GRITA: "Sección de contacto y redes sociales"
"use client";

import { FadeInSection } from "@/ui/animations/FadeInSection";
import { motion } from "framer-motion";
import { personalInfo } from "@/content/projects-data";

export function Contact() {
  const socialLinks = [
    { name: "GitHub", url: personalInfo.github, icon: "🐙" },
    { name: "LinkedIn", url: personalInfo.linkedin, icon: "💼" },
    { name: "Email", url: `mailto:${personalInfo.email}`, icon: "✉️" },
    { name: "Teléfono", url: `tel:${personalInfo.phone}`, icon: "📱" },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900 flex items-center">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              Conectemos
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente o simplemente quieres charlar?
              No dudes en contactarme.
            </p>
          </div>
        </FadeInSection>

        <div className="max-w-4xl mx-auto">
          {/* Email destacado */}
          <FadeInSection delay={0.2}>
            <motion.div
              className="text-center mb-16"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-300 hover:to-pink-300 transition-all"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </FadeInSection>

          {/* Redes sociales */}
          <FadeInSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors text-center group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {link.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </FadeInSection>

          {/* Footer */}
          <FadeInSection delay={0.6}>
            <div className="text-center mt-20 pt-10 border-t border-gray-800">
              <p className="text-gray-500">
                © {new Date().getFullYear()} {personalInfo.name}. Hecho con Next.js y Framer Motion.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
