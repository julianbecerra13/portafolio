"use client";

import { Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { experiences } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="Experiencia"
          subtitle="Mi trayectoria profesional construyendo productos digitales"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <AnimatedSection
              key={exp.id}
              delay={index * 0.1}
              className="relative mb-12 last:mb-0"
            >
              <div
                className={`flex flex-col md:flex-row md:items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 mt-1.5">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                </div>

                {/* Content card */}
                <div className="ml-10 md:ml-0 md:w-[calc(50%-2rem)] rounded-lg border border-border bg-card p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {exp.position}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {exp.current && (
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-3">
                      Actual
                    </span>
                  )}

                  <p className="text-sm text-muted-foreground mb-3">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.slice(0, 4).map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                        +{exp.technologies.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
