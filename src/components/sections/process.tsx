"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { processSteps } from "@/lib/constants";
import { useLocale } from "@/hooks/use-locale";

export function Process() {
  const { t } = useLocale();

  return (
    <section id="proceso" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title={t.process.title} subtitle={t.process.subtitle} />

        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative flex gap-6 group"
                >
                  <div className="relative shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-card text-primary font-mono font-bold text-lg shadow-sm group-hover:border-primary group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex-1 rounded-lg border border-border bg-card p-5 group-hover:border-primary/30 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <h3 className="text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <span className="text-xs rounded-full bg-primary/10 text-primary px-2.5 py-0.5 font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
