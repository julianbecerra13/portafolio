"use client";

import { MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { siteConfig } from "@/config/site";
import { stats } from "@/lib/constants";

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Sobre mi"
          subtitle="Desarrollador Full Stack enfocado en productos end-to-end"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy desarrollador Full Stack con base en Bucaramanga, Colombia.
                Mi stack principal:{" "}
                <span className="text-foreground font-medium">Go</span> y{" "}
                <span className="text-foreground font-medium">Node.js</span>{" "}
                para APIs,{" "}
                <span className="text-foreground font-medium">
                  React/Next.js
                </span>{" "}
                para web, y{" "}
                <span className="text-foreground font-medium">Flutter</span>{" "}
                para movil.
              </p>
              <p>
                He construido plataformas SaaS con dashboards complejos,
                integraciones OAuth con Meta y Google, sistemas de pagos, APIs
                con autenticacion JWT y apps publicadas en Play Store. Me enfoco
                en arquitectura modular, buenas practicas y despliegues
                productivos.
              </p>
              <p>
                Actualmente trabajo en GSA Marketing Hub, una plataforma de
                marketing digital con CRM, inbox multicanal y herramientas SEO,
                donde desarrollo frontend, backend y app movil.
              </p>
              <div className="flex items-center gap-2 text-sm pt-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-6 text-center"
                >
                  <p className="text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
