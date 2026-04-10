"use client";

import {
  Server,
  Monitor,
  Smartphone,
  Database,
  Container,
  Plug,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { skillCategories } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="h-5 w-5" />,
  Monitor: <Monitor className="h-5 w-5" />,
  Smartphone: <Smartphone className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Container: <Container className="h-5 w-5" />,
  Plug: <Plug className="h-5 w-5" />,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Stack Tecnologico"
          subtitle="Tecnologias que uso diariamente para construir productos"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.name} delay={index * 0.08}>
              <div className="rounded-lg border border-border bg-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    {iconMap[category.icon]}
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
