"use client";

import { Mail, MapPin, Download, Github, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          title="Contacto"
          subtitle="Estoy abierto a nuevas oportunidades y proyectos interesantes"
        />

        <AnimatedSection delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Si tienes un proyecto en mente, una oportunidad laboral o
              simplemente quieres conectar, no dudes en escribirme.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Enviar email
              </a>
              <a
                href="/resume/Julian_Becerra_CV_Fullstack.pdf"
                download
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground shadow-sm hover:bg-accent transition-colors"
              >
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
